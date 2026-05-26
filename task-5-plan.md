# Task 5 Plan — Create Header Component

## Goal
Create a header component containing a search bar input and a menu button. Verify both are visible when the app runs.

---

## File to Create

```
src/app/components/header/header.component.ts
src/app/components/header/header.component.html
src/app/components/header/header.component.css
```

Selector: `app-header`

---

## Component Contents

**Search bar** — a plain `<input>` of type `text` with a placeholder (e.g. "Search recipes..."). No functionality yet, that comes in Task 10.

**Menu button** — a `<button>` with a label or icon (e.g. "☰"). No functionality yet, the sidebar wiring comes in Task 7.

---

## Wiring

Add `<app-header>` to the root template (`app.component.html`) so it renders at the top of the page.

---

## Verification

Run `npm start` and confirm:
- The header is visible at the top of the page
- The search bar input is present
- The menu button is present

---

## What to Avoid
- Do not wire up the search bar to any logic yet
- Do not wire up the menu button to the sidebar yet
- Do not add routing or any new dependencies
