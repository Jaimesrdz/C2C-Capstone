# Task 4 Plan — Create Recipe Dictionary

## Goal
Create a typed dictionary of dishes that can be console.log'd to verify correctness.

---

## Data Model

Define a `Recipe` interface and export a populated array.

```
Recipe {
  id:           string     // slug, e.g. "chicken-stir-fry"
  name:         string     // display name, e.g. "Chicken Stir Fry"
  ingredients:  string[]   // list of Ingredient ids from Task 3
  instructions: string[]   // ordered steps
}
```

The `ingredients` field stores IDs that match the `id` values from `INGREDIENTS` (Task 3). This is what will power the filtering in Task 9.

---

## File to Create

```
src/app/data/recipes.ts
```

Export two things from this file:
- The `Recipe` interface
- A `RECIPES` const array populated with seed data (aim for 6–8 dishes that use ingredients already defined in `ingredients.ts`)

---

## Verification

In any existing component (e.g. `app.component.ts`), temporarily import `RECIPES` and `console.log` it inside `ngOnInit`. Confirm in the browser console that the array prints with the correct shape.

Remove the `console.log` after verifying.

---

## What to Avoid
- Do not add fields beyond `id`, `name`, `ingredients`, and `instructions` — image URLs, descriptions, and tags can be added when the UI tasks require them
- Do not create a service or any filtering logic yet
- Do not modify `ingredients.ts` from Task 3
