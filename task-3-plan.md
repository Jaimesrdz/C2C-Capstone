# Task 3 Plan — Create Ingredient List

## Goal
Create a typed list of ingredients that can be console.log'd to verify correctness.

---

## Data Model

Define an `Ingredient` interface and export a populated array.

```
Ingredient {
  id:    string   // slug, e.g. "chicken-breast"
  label: string   // display name, e.g. "Chicken Breast"
}
```

The `id` field will be used later (Task 9) to match ingredients against recipes. The `label` is what gets shown to the user.

---

## File to Create

```
src/app/data/ingredients.ts
```

Export two things from this file:
- The `Ingredient` interface
- A `INGREDIENTS` const array populated with realistic seed data (aim for ~15 ingredients across common categories like proteins, vegetables, dairy, grains)

---

## Verification

In any existing component (e.g. `app.component.ts`), temporarily import `INGREDIENTS` and `console.log` it inside `ngOnInit`. Confirm in the browser console that the array prints with the correct shape.

Remove the `console.log` after verifying.

---

## What to Avoid
- Do not create a service yet — that comes later
- Do not add routing or any other files
- Do not add a `category` field or anything beyond `id` and `label` — keep it minimal until the UI tasks require more
