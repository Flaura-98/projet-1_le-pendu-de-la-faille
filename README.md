# 🗡️ Le Pendu de la Faille — Édition Invocateur

> Un jeu du pendu solo ou multijoueur, thème League of Legends.
> Devine le nom du champion caché avant que la Faille ne se referme.

Statut : En cours ⏳
Licence : Projet Pédagogique - Believemy - Projet Passerelle #1
IA : 🤖 **Claude Code** a été utilisé uniquement de manière ponctuelle pour obtenir des explications, mieux comprendre certaines fonctionnalités et aider à identifier ou résoudre certains bugs. **L'intégralité de la conception, du développement, de l'intégration et des autres fonctionnalités a été réalisée par moi.**

---

## 📖 Description

**Le Pendu de la Faille** est un jeu du pendu revisité dans l’univers de League of Legends : les mots à deviner sont des noms de champions. Le pendu traditionnel est remplacé par une mascotte originale, et une fois le mot trouvé, le portrait du champion s’affiche accompagné d’une citation.

Projet réalisé dans le cadre d’un projet-passerelle #1 de la formation Développeur Web Full Stack - Believemy. Sans démonstration fournie au préalable, la conception (maquette, identité visuelle, règles) est entièrement personnelle.

---

## 🎮 Règles du jeu

- Le mot secret est le nom d'un champion, tiré au hasard.
- **10 erreurs autorisées.** Chaque erreur ajoute un morceau à la mascotte
  suspendue à la potence.
- Deux façons de jouer, à tout moment et dans n'importe quel ordre :
  proposer **une lettre** (clavier virtuel ou clavier physique) ou proposer
  **le mot entier**.
- Les accents sont pardonnés : taper `e` trouve aussi `é`. Un petit `´` au-dessus
  du tiret prévient qu'il y a un accent à cet endroit, sans révéler la lettre.
- **Pas de gestion de joueurs ni de tours** : la vie est partagée, plusieurs
  personnes peuvent se relayer devant le même écran.
- Victoire comme défaite, l'écran de fin révèle le champion — portrait, nom et
  titre officiel.

---

## ✨ Fonctionnalités

- 🎮 Mode **solo ou multijoueur local**.
- 🔤 Le joueur peut proposer **une lettre** ou **un mot complet**.
- 🏆 **Révélation du champion** trouvé : portrait + citation (via l’API Data Dragon).
- 🌍 Gestion complète des accents à l'affichage **et** à la comparaison.
- ⌨️ Clavier virtuel **et** clavier physique.
- 📡 Gestion de la panne réseau, avec bouton « Réessayer ».
- 🎨 Identité visuelle originale (Pendu dessiné en **SVG**, donc net à toutes les tailles).
- 🖥️ Interface en **2 écrans avec transition de glissement** (jeu, résultat).
- 📱 **Responsive** jusqu'à 320 px de large.
- 🏅 Écran de **victoire / défaite** stylisé.

---

## 🛠️ Stack technique

- **HTML / CSS / JavaScript**
- **Git & GitHub** pour le versionnage.
- **Data Dragon** (API publique Riot Games) pour les portraits de champions et citations.

---

## 🎨 Identité visuelle

| Élément        | Détail                                                   |
| -------------- | -------------------------------------------------------- |
| Titres         | Police **Cinzel** (Google Fonts)                         |
| Texte de corps | Police **Jost** (Google Fonts)                           |
| Couleurs       | Fond `#0A1428` · Accent doré `#C8AA6E` · Texte `#F0E6CF` |
| Motifs         | Cadres à coins losanges, texture en hachures diagonales  |

---

## 🚀 Installation

```bash
git clone https://github.com/Flaura-98/pendu-de-la-faille.git
cd pendu-de-la-faille](https://github.com/Flaura-98/projet-1_le-pendu-de-la-faille.git)
```

Puis ouvre simplement `index.html` dans ton navigateur.

Le jeu démarre tout seul - il n'y a ni page d'accueil ni bouton « Jouer ».

> **Une connexion internet est nécessaire**, puisque la liste des champions et les portraits viennent de l'API. Hors ligne, le jeu affiche un message d'erreur et un bouton « Réessayer » plutôt que de démarrer.

---

## 📂 Structure du projet

```
projet-1_le-pendu-de-la-faille/
├── index.html
├── css/
│   ├──
│   └──
├── js/
│   ├──
│   └──
├── docs/
│   └──
├── .gitignore
└── README.md
```

---

## 🎥 Démo vidéo

📺 Lien vers la vidéo de démonstration (non-répertoriée) : _[à compléter]_

---

## 📄 Documentation technique

La documentation technique complète (maquette, choix de conception, règles détaillées) est disponible ici : _[à compléter — lien ou fichier joint à la soumission]_

---

## ⚖️ Crédits & mentions légales

- Portraits de champions récupérés via **Data Dragon**, mis à disposition par Riot Games pour les projets communautaires.
- La mascotte du pendu est une **création originale**, distincte du Poro officiel de Riot Games.
- Les polices _Beaufort for LOL_ et _Spiegel_ étant sous licence commerciale, ce projet utilise **Cinzel** et **Jost** (Google Fonts, libres de droits) à la place.
- L’écran de victoire/défaite est une **interprétation originale**, non une reproduction des écrans officiels de fin de partie.
- League of Legends est une marque déposée de Riot Games, Inc. Ce projet est un travail pédagogique **non commercial et n’est affilié ni approuvé par Riot Games**.
  _Le Pendu de la Faille — Édition Invocateur n'est pas approuvé par Riot Games
  et ne reflète pas les points de vue ou opinions de Riot Games ni de toute
  personne officiellement impliquée dans la production ou la gestion des
  propriétés de Riot Games. Riot Games et toutes les propriétés associées sont
  des marques commerciales ou des marques déposées de Riot Games, Inc._

---

## 👤 Auteur

_Laura Fontaine/Flaura.dev_ — projet passerelle #1 réalisé dans le cadre de la formation Développeur Web Full Stack Freelance - Believemy

## 📜 Licence

Projet pédagogique — usage non commercial.
