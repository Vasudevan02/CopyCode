# CopyCode

A responsive, dark-themed developer cheat sheet viewer built with React components and a modular sidebar architecture.

## Features
- **React Components**: Structured with reusable components (`App`, `Sidebar`, `CodeCard`).
- **Modular Sidebar Sections**: Each sidebar topic lives in its own dedicated file under `sections/`.
- **One-Click Copy**: Instant clipboard copying with visual "Copied!" feedback and fallback support.
- **Synchronized Line Numbers**: Dynamic, automatic line numbering for all code snippets.
- **Zero Build Step**: Native React 18 running statically with local vendor scripts and CDN fallback.

## Project Structure
- `index.html` — Clean root HTML hosting the React root container
- `style.css` — Dark GitHub-inspired design and responsive layouts
- `main.jsx` — Entry point mounting the React application
- `components/` — React UI components:
  - `App.jsx` — Main view & state manager
  - `Sidebar.jsx` — Interactive navigation list
  - `CodeCard.jsx` — Snippet card with window controls, copy button, and line numbers
- `sections/` — Individual sidebar data modules:
  - `git-commands.js`
  - `simple-reg-form.js`
  - `feedback-form.js`
  - `simple-ts-program.js`
  - `registration.js`
  - `react-router.js`
  - `mongodb-cmds.js`
  - `mysql-cmds.js`
  - `spring-boot.js`
- `vendor/` — Local React 18 and ReactDOM 18 production bundles for offline support
