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
