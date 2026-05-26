# Task 12 Plan — Recipe Detail Page Content

## Goal
Populate the recipe detail page with the dish name, image, required ingredients, and instructions. Verify all of this information is visible on the page.

---

## Data Model Change

Add `imageUrl` to the `Recipe` interface in `src/app/data/models.ts` (or wherever `Recipe` is defined):

```
imageUrl: string   // relative path e.g. "assets/images/chicken-stir-fry.jpg"
                   // or a placeholder URL if no images are available
```

Update each entry in `RECIPES` with an `imageUrl` value. A public placeholder service (e.g. `https://placehold.co/400x300`) is fine if real images are not ready.

---

## Reading the Route Param

In `recipe-detail.component.ts`, inject `ActivatedRoute` to read the `:id` param, then look up the matching recipe via `RecipeService.getRecipeById()`.

Add `getRecipeById` to `RecipeService`:

```
getRecipeById(id: string): Recipe | undefined {
  return RECIPES.find(r => r.id === id);
}
```

Store the result in a local property on the component. Handle the `undefined` case — if no recipe matches, display a "Recipe not found" message.

---

## Template Content

Render the following on the detail page:

- **Image** — `<img>` bound to `recipe.imageUrl`
- **Name** — recipe title in a heading
- **Ingredients** — loop over `recipe.ingredients`, look up each ID against `INGREDIENTS` to display the human-readable label, render as a list
- **Instructions** — loop over `recipe.instructions` and render as a numbered list

---

## Verification

Run `npm start`, click a recipe, and confirm the detail page shows:
- The dish image
- The dish name
- The full ingredients list (labels, not IDs)
- The step-by-step instructions

---

## What to Avoid
- Do not add new pages or routes
- Do not add fields beyond `imageUrl` to the data model — keep `Recipe` minimal
