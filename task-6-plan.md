# Task 6 Plan — Create Body Component

## Goal
Create a body component that displays all recipes from the `RECIPES` array as a list or grid of cards. Verify the dishes are visible when the app runs.

---

## Files to Create

```
src/app/components/body/body.component.ts
src/app/components/body/body.component.html
src/app/components/body/body.component.css
```

Selector: `app-body`

---

## Component Contents

Import `RECIPES` directly into the component and assign it to a class property. Loop over it in the template using `@for`, rendering each recipe as a simple card showing at minimum the recipe `name`.

No filtering logic yet — display all recipes unconditionally.

---

## Wiring

Add `<app-body>` to the root template (`app.component.html`) below `<app-header>`.

---

## Verification

Run `npm start` and confirm:
- All recipes from `RECIPES` appear on the page
- Each card shows the recipe name

---

## What to Avoid
- Do not add click navigation yet, that comes in Task 11
- Do not add filtering logic yet, that comes in Task 9
- Do not create a service — import `RECIPES` directly for now
