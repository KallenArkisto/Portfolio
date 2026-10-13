# Copilot instructions for this repository

## Build, lint, and validation

This repo is a Vite + React portfolio app. The available commands are defined in `package.json`:

- Install dependencies: `npm install`
- Start the local dev server: `npm run dev`
- Build the production bundle: `npm run build`
- Lint the codebase: `npm run lint`

There is no automated test runner configured (`package.json` has no `test` script). If you need a targeted validation step without running the full suite, prefer:

- `npx oxlint src/components/SiteHeader.jsx` for a single file
- `npx oxlint src/sections/PortfolioSection.jsx` for a single feature area
- `npm run build` for app-level validation when changing page composition or routing

## High-level architecture

This repository mixes two separate React entry points and one static template shell:

- `vite.config.js` defines two build inputs: `index.html` and `MyPage/index.html`
- `index.html` is the root Vite page, but it currently contains a placeholder and is not the active app entry
- `MyPage/index.html` is the actual portfolio shell served at `/MyPage/`; it loads the vendor scripts and mounts `#mypage-root`
- `src/mypage-entry.jsx` mounts the `MyPage` component into the `#mypage-root` element and initializes AOS after mount
- `src/App.jsx` is the separate root Vite page composition, but it is not the active path for the portfolio page in the current build

The page structure follows a section-based React composition:

- `src/components/` contains reusable UI such as `SiteHeader`, `SiteFooter`, `ScrollTop`, and `headcontent.jsx`
- `src/sections/` contains page sections such as `HeroSection`, `AboutSection`, `ResumeSection`, `PortfolioPageSection`, `PortfolioSection`, and `ContactSection`
- `src/data/projects.js` contains portfolio data consumed by the project cards
- `public/MyPage/assets/` contains the static template CSS and vendor JS for the template/portfolio theme
- `public/img/` holds images used by the portfolio and profile content

## Key conventions and repo-specific patterns

- Keep the “two-entry” structure in mind: changes to the main app shell and changes to the MyPage portfolio shell are separate concerns.
- Reusable UI belongs in `src/components`, while content sections belong in `src/sections`.
- The project relies on third-party libraries loaded directly from `MyPage/index.html` (`AOS`, `GLightbox`, `Isotope`, etc.), and effects in components call into `window.AOS` / `window.GLightbox` when the component mounts.
- Static assets under `public/` are served as-is; they are not imported through the Vite module pipeline. When adding images, styles, or vendor scripts, keep the same root-relative paths such as `/img/...` or `/MyPage/...`.
- The portfolio has a filterable card layout driven by data and local component state (`useState` with `activeFilter`), rather than a global store.
- JSX files use the `.jsx` extension and are treated as client-side React components.
- Keep custom template CSS class names and layout conventions aligned with the existing theme classes instead of inventing a separate styling system.

## Documentation and repo context

- `file-structure-explanation.md` documents the split between the root Vite page and the MyPage template composition; use it as the source of truth when working across the two entry points.
- The project is a static portfolio site using Vite; it is not organized as a larger app with server logic, API routes, or a full test framework.
