# Template site restaurant

Template de site vitrine one-page pour restaurants, cafés et glaciers. Construit avec **React**, **Vite** et **Tailwind CSS**.

Le site inclut : accueil, à propos, services, galerie, menu, avis clients, section événement (Open Mic), carte Google Maps et contact.

---

## Prérequis

- [Node.js](https://nodejs.org/) 18 ou supérieur
- npm (inclus avec Node.js)

---

## Installation

```bash
# Cloner ou copier le template
git clone <url-du-repo> mon-restaurant
cd mon-restaurant

# Installer les dépendances
npm install
```

---

## Commandes disponibles

| Commande         | Description                              |
|------------------|------------------------------------------|
| `npm run dev`    | Lance le serveur de développement (Vite) |
| `npm run build`  | Génère le site de production dans `dist/` |
| `npm run preview`| Prévisualise le build de production      |

Le serveur de développement est accessible par défaut sur [http://localhost:5173](http://localhost:5173).

---

## Personnaliser le site pour un nouveau restaurant

La personnalisation se fait principalement via des fichiers de configuration et de données, sans toucher aux composants React.

### 1. Configuration centrale — `src/config/site.config.js`

C'est le fichier le plus important. Il contient toutes les informations globales du restaurant :

- **Identité** : nom, slogan, catégorie
- **Contact** : téléphone, adresse
- **Google Maps** : lien vers la fiche, avis, iframe embed
- **Images** : logo, hero, sections
- **SEO** : titre, description, mots-clés, Open Graph
- **Schema.org** : coordonnées, note, horaires, type de cuisine
- **Réseaux sociaux** : Facebook, Instagram, TikTok
- **Copyright** : année et tagline du footer

```js
export const siteConfig = {
  name: "Mon Restaurant",
  slogan: "Votre slogan",
  category: "Restaurant • Café",
  phone: "+212600000000",
  phoneDisplay: "+212 600 000 000",
  // ...
};
```

### 2. Contenus textuels — dossier `src/data/`

| Fichier          | Contenu                                      |
|------------------|----------------------------------------------|
| `about.js`       | Textes du hero et de la section À propos     |
| `services.js`    | Liste des services proposés                  |
| `whyUs.js`       | Arguments « Pourquoi nous choisir »          |
| `gallery.js`     | Images et textes de la galerie               |
| `menu.js`        | Catégories et plats du menu avec prix        |
| `reviews.js`     | Avis clients, section Open Mic et contact    |
| `navigation.js`  | Liens de la navbar, menu mobile et footer    |

Chaque fichier exporte des objets JavaScript simples. Modifiez les textes, ajoutez ou supprimez des éléments dans les tableaux selon vos besoins.

> **Astuce** : gardez le `name` dans `site.config.js` et le `title` dans `about.js` (hero) synchronisés.

### 3. Images — dossier `public/assets/images/`

Remplacez les images existantes en conservant les mêmes noms de fichiers, ou mettez à jour les chemins dans `site.config.js` et `gallery.js`.

| Fichier recommandé   | Usage                          |
|----------------------|--------------------------------|
| `logo.png`           | Logo, favicon, preloader       |
| `hero.png` / `img3.png` | Image de fond du hero       |
| `img1.png` – `img6.png` | Galerie photo              |
| `restaurant-2.jpg`   | Section Open Mic (fond)        |
| `hero.png`           | Section « Pourquoi nous »      |

Formats acceptés : PNG, JPG, WebP. Privilégiez des images optimisées (moins de 500 Ko si possible) pour de bonnes performances.

### 4. SEO et métadonnées — `index.html`

Mettez à jour manuellement les balises `<meta>`, le `<title>`, le favicon et le script JSON-LD (Schema.org) dans `index.html`. Ces valeurs doivent correspondre à celles de `site.config.js`.

### 5. Couleurs et typographie — `tailwind.config.js`

Les couleurs du thème sont définies dans la section `theme.extend.colors` :

```js
colors: {
  gold: { DEFAULT: '#d4af37', dark: '#c5a028' },
  cta: { DEFAULT: '#e8a87c', hover: '#d4956a' },
  cream: '#faf9f6',
},
```

Les polices **Playfair Display** (titres) et **Poppins** (texte) sont chargées depuis Google Fonts dans `index.html`.

### 6. Activer ou désactiver des sections — `src/App.jsx`

Pour retirer une section du site, commentez ou supprimez le composant correspondant :

```jsx
<main>
  <Hero />
  <About />
  <Services />
  {/* <OpenMic /> */}
  <Contact />
</main>
```

Pensez aussi à retirer le lien associé dans `src/data/navigation.js`.

---

## Structure du projet

```
restaurant-template/
├── public/
│   └── assets/images/     # Images statiques servies telles quelles
├── src/
│   ├── config/
│   │   └── site.config.js # Configuration centrale du restaurant
│   ├── data/              # Contenus textuels et listes
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, Preloader
│   │   ├── sections/      # Sections de la page (Hero, Menu, etc.)
│   │   └── ui/            # Composants réutilisables (icônes, animations)
│   ├── hooks/             # Hooks React personnalisés
│   ├── App.jsx            # Assemblage des sections
│   ├── main.jsx           # Point d'entrée React
│   └── index.css          # Styles globaux et classes Tailwind custom
├── index.html             # Métadonnées SEO et Schema.org
├── tailwind.config.js     # Configuration Tailwind CSS
├── vite.config.js         # Configuration Vite
└── package.json
```

---

## Déploiement

### Build de production

```bash
npm run build
```

Le dossier `dist/` contient les fichiers statiques prêts à être hébergés.

## Technologies utilisées

- [React 19](https://react.dev/)
- [Vite 6](https://vite.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)

---

## Auteur

Template créé par **Mohamed Ben Saïd**.

---

## Licence

Template libre d'utilisation pour vos projets clients.
