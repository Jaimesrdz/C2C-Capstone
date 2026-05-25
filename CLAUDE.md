# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

C2C-Capstone is an Angular recipe finder app. Users select available ingredients via toggle buttons in a sidebar, and the app filters a local recipe dictionary to show matching dishes. Clicking a recipe navigates to a detail page with the dish name, image, ingredients, and instructions.

The Angular app lives in the `recipe-finder/` subdirectory. All development commands must be run from there.

## Commands

```bash
cd recipe-finder

npm start          # Dev server at http://localhost:4200
npm run build      # Production build
npm test           # Run tests with Vitest
npm run watch      # Build in watch mode
```

To run a single test file:
```bash
cd recipe-finder
npx vitest run src/app/path/to/file.spec.ts
```

## Architecture

**Framework**: Angular 21 with standalone components (no NgModules). All components use the `standalone: true` flag and import dependencies directly.

**State**: Use Angular Signals (`signal()`, `computed()`) for reactive state — not RxJS Subjects or BehaviorSubjects.

**Routing**: Configured in `src/app/app.routes.ts`, consumed by `provideRouter` in `app.config.ts`. The root template (`app.html`) contains a `<router-outlet>`.

**Component selector prefix**: `app-` (e.g., `app-header`, `app-sidebar`).

**Data layer**: Ingredients and recipes are plain TypeScript data (arrays/objects defined in service or data files) — no backend or HTTP calls.

**Key planned structure**:
- `src/app/data/` — ingredient list and recipe dictionary
- `src/app/components/header/` — search bar + menu button
- `src/app/components/sidebar/` — ingredient toggle filters
- `src/app/components/body/` — recipe card grid
- `src/app/pages/recipe-detail/` — full recipe page (routed)

**What to NOT do**:
- Don't change any tests unless specified to
- Don't add new dependencies without asking

## TypeScript Config

Strict mode is fully enabled, including `strictTemplates`, `noImplicitReturns`, and `noImplicitOverride`. Type everything explicitly — avoid `any`.
