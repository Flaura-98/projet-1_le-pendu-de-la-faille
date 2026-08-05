// ====< LES REGLES DU JEU >====
const MAX_ERRORS = 10;
const ALPHABET = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const DEFEAT_PAUSE = 1000;
const API = "https://ddragon.leagueoflegends.com";

// ====< LES REGLES DU JEU - VARIABLES >====
let champion = null; // le champion
let version = ""; // la version du jeu, sert pour récupérer l'image du champion
let foundLetters = []; // les lettres trouvées
let wrongLetters = []; // les mauvaises lettres
let errors = 0; // mauvaises lettres + noms
let status = "playing"; // commence par jouer puis gagné ou perdu

// ====< FONCTIONS UTILES >====
// met en majuscule et enlève les accents (NFD)
function plain(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}

// on se demande si le caractère est une lettre
function isLetter(char) {
  return ALPHABET.includes(plain(char));
}

// les différents accents
const ACCENTS = {
  "\u0301": "´",
  "\u0300": "`",
  "\u0302": "^",
  "\u0308": "¨",
};

// ====< API >====
async function newGame() {
  document.getElementById("fetch-error").hidden = true;

  try {
    // appel de la dernière version. RIOT la met toujours en 1ère
    const versionResponse = await fetch(`${API}/api/versions.json`);
    const versions = await versionResponse.json();
    version = versions[0];

    // récupère les champions en fr
    const championResponse = await fetch(
      `${API}/cdn/${version}/data/fr_FR/champion.json`,
    );
    const data = await championResponse.json();

    // mettre les champions dans un tableau
    const champions = Object.values(data.data);

    // tirage au sort
    champion = champions[Math.floor(Math.random() * champions.length)];
  } catch (error) {
    document.getElementById("fetch-error").hidden = false;
    return;
  }

  // remise à zéro
  foundLetters = [];
  wrongLetters = [];
  errors = 0;
  status = "playing";

  refresh();
}

// ====< AFFICHAGE >====

// == LETTRES ==
// créé une case pour chaque lettre
function showWord() {
  let html = "";

  for (const char of champion.name) {
    if (!isLetter(char) || foundLetters.includes(plain(char))) {
      html += `<span class="slot found">${char}</span>`;
    } else {
      html += `<span class="slot">&nbsp;${accentHint(char)}</span>`;
    }
  }

  document.getElementById("word-display").innerHTML = html;
}

// affichage de l'accent s'il y en a un
function accentHint(char) {
  const accent = ACCENTS[char.normalize("NFD")[1]];
  return accent ? `<span class="hint">${accent}</span>` : "";
}

// affichage des 26 touches
function showKeyboard() {
  let html = "";

  for (const letter of ALPHABET) {
    if (foundLetters.includes(letter)) {
      html += `<button class="key correct" disabled>${letter}</button>`;
    } else if (wrongLetters.includes(letter)) {
      html += `<button class="key wrong" disabled>${letter}</button>`;
    } else {
      html += `<button class="key">${letter}</button>`;
    }
  }

  document.getElementById("keyboard").innerHTML = html;
}

// == PENDU ==
// affiche ou cache le pendu selon les erreurs
function showHangman() {
  for (const part of document.querySelectorAll("#hangman [data-errors]")) {
    let visible = errors >= Number(part.dataset.errors);

    if (part.classList.contains("eye") && errors >= MAX_ERRORS) {
      visible = false;
    }

    part.classList.toggle("hidden", !visible);
  }
}

// remise à zéro
function refresh() {
  showWord();
  showKeyboard();
  showHangman();
  checkEnd();
}

// ====< LE JEU >====

function playLetter(letter) {
  if (status !== "playing") return;

  if (foundLetters.includes(letter) || wrongLetters.includes(letter)) return;

  if (plain(champion.name).includes(letter)) {
    foundLetters.push(letter);
  } else {
    wrongLetters.push(letter);
    errors++;
  }

  refresh();
}

function playWord(word) {
  if (status !== "playing" || !word.trim()) return;

  if (plain(word.trim()) === plain(champion.name)) {
    for (const char of champion.name) {
      if (isLetter(char) && !foundLetters.includes(plain(char))) {
        foundLetters.push(plain(char));
      }
    }
  } else {
    errors++;
  }

  refresh();
}

function hasWon() {
  for (const char of champion.name) {
    if (isLetter(char) && !foundLetters.includes(plain(char))) return false;
  }
  return true;
}

// ====< RESULTAT >====
function checkEnd() {
  if (hasWon()) {
    status = "won";
    showResult();
  } else if (errors >= MAX_ERRORS) {
    status = "lost";
    setTimeout(showResult, DEFEAT_PAUSE);
  }
}

function showResult() {
  const won = status === "won";

  const title = document.getElementById("result-title");
  title.textContent = won ? "VICTOIRE" : "DÉFAITE";
  title.className = won ? "victory" : "defeat";

  const portrait = document.getElementById("champion-portrait");
  portrait.src = `${API}/cdn/${version}/img/champion/${champion.id}.png`;
  portrait.alt = champion.name;

  document.getElementById("champion-name").textContent = champion.name;
  document.getElementById("champion-title").textContent = champion.title;

  goToPage(1);
}

// 0 = écran pendu, 1 = écran résultat
function goToPage(index) {
  document.getElementById("track").style.transform =
    `translateY(-${index * 100}vh)`;
}

// ====< CLICS CLICS >====

// le clavier
document.getElementById("keyboard").addEventListener("click", (event) => {
  if (event.target.classList.contains("key")) {
    playLetter(event.target.textContent);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.target.id === "word-input") return;

  const letter = event.key.toUpperCase();
  if (letter.length === 1 && ALPHABET.includes(letter)) {
    playLetter(letter);
  }
});

document.getElementById("word-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.getElementById("word-input");
  playWord(input.value);
  input.value = "";
});

document.getElementById("btn-retry").addEventListener("click", newGame);

document.getElementById("btn-replay").addEventListener("click", () => {
  goToPage(0);
  newGame();
});

newGame();
