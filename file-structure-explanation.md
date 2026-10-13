# File Structure Explanation

## Single-app setup

The project has one Vite HTML entry and one React app. `index.html` loads the theme styles and vendor libraries, then mounts the app through `src/main.jsx`.

```text
portfolio/
├── index.html                     # Default Vite HTML entry point
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── img/
│       ├── profile/
│       └── portfolio/
│   └── MyPage/assets/             # Retained template styles and vendor libraries
├── src/
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Starter stylesheet (not currently imported)
│   ├── index.css                  # Minimal global reset
│   ├── main.jsx                   # React entry point
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── ProjectCard.jsx
│   │   ├── ScrollTop.jsx
│   │   ├── SiteFooter.jsx
│   │   ├── SiteHeader.jsx
│   │   └── skillsComponent.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   └── sections/
│       ├── AboutSection.jsx
│       ├── ContactSection.jsx
│       ├── HeroSection.jsx
│       ├── PortfolioSection.jsx
│       ├── PortfolioSection-bootstrap.jsx # Preserved Bootstrap-template version; not used by App
│       ├── ResumeSection.jsx
│       └── ...
├── .gitignore
├── .oxlintrc.json
├── README.md
├── package.json
├── package-lock.json
├── vite.config.js
├── file-structure-explanation.md
└── dist/                         # Production build output
```

## Render flow

1. `index.html` is the single app entry and contains the root mount element.
2. `src/main.jsx` mounts the app into `document.getElementById('root')` using React `StrictMode`.
3. `src/App.jsx` composes the header, hero, about, resume, portfolio, contact, footer, and scroll-to-top UI.
4. `src/sections/PortfolioSection.jsx` renders the project cards from `src/data/projects.js`.
5. `src/App.jsx` initializes AOS after the page mounts. The root page is the only app entry; there is no separate MyPage HTML shell.
6. `src/sections/PortfolioSection-bootstrap.jsx` is a preserved copy of the older Bootstrap-template portfolio section and is intentionally not imported by the active app.

## Notes

- The extra MyPage HTML shell and alternate React entry were removed. The existing theme CSS and vendor libraries remain under `public/MyPage/assets/` and are loaded by the single root `index.html`.
- Static images remain in `public/img/` and are referenced by root-relative paths.
- `vite.config.js` uses Vite's default HTML entry discovery; it does not define additional build inputs.
