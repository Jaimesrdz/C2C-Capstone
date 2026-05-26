# Task 7 Plan — Create Sidebar Component

## Goal
Create a sidebar component that is hidden by default and becomes visible when the menu button in the header is clicked. Verify the sidebar appears and disappears on button click.

---

## Files to Create

```
src/app/components/sidebar/sidebar.component.ts
src/app/components/sidebar/sidebar.component.html
src/app/components/sidebar/sidebar.component.css
```

Selector: `app-sidebar`

---

## Component Contents

The sidebar itself is an empty shell for now — ingredient toggle buttons come in Task 8. It just needs enough content (e.g. a heading like "Filters") to confirm it is visible when opened.

---

## State

A single boolean `signal` named `isOpen` lives in `app.component.ts` and controls sidebar visibility. This keeps the toggle logic at the root level where both `app-header` and `app-sidebar` can share it.

```
isOpen = signal(false);
```

---

## Wiring

**Header** — add an `Output` event emitter named `menuClick` to `header.component.ts`. The menu button emits it on click. In `app.component.html`, bind it to a method that calls `isOpen.set(!isOpen())`.

**Sidebar** — add an `Input` named `visible` to `sidebar.component.ts`. In `app.component.html`, pass `[visible]="isOpen()"` and use it in the sidebar template to conditionally render or show/hide the panel (e.g. via `@if` or a CSS class toggle).

---

## Verification

Run `npm start` and confirm:
- The sidebar is not visible on load
- Clicking the menu button makes the sidebar appear
- Clicking the menu button again hides it

---

## What to Avoid
- Do not add ingredient buttons yet, that comes in Task 8
- Do not add animations or transitions — keep it a simple show/hide for now
