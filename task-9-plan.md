# Task 9 Plan — Filter Recipes by Selected Ingredients

## Goal
Wire the sidebar's selected ingredients to the body component so that only recipes containing all selected ingredients are displayed. Verify filtering works correctly when toggling buttons.

---

## The Problem

`selectedIds` currently lives inside `sidebar.component.ts` and `RECIPES` lives inside `body.component.ts`. They are siblings with no shared state — a service is now needed to bridge them.

---

## Service to Create

```
src/app/services/recipe.service.ts
```

A root-level injectable that owns the shared selected ingredients signal and exposes the filtered recipes as a computed:

```
selectedIds   = signal<Set<string>>(new Set())
filteredRecipes = computed<Recipe[]>(() => {
  if (selectedIds().size === 0) return RECIPES;
  return RECIPES.filter(recipe =>
    [...selectedIds()].every(id => recipe.ingredients.includes(id))
  );
})

toggleIngredient(id: string): void  // same Set-replacement logic as Task 8
```

AND logic is used — a recipe must include every selected ingredient to appear. If nothing is selected, all recipes are shown.

---

## Changes to Existing Components

**sidebar.component.ts** — remove the local `selectedIds` signal and `toggleIngredient` method. Inject `RecipeService` and delegate to `recipeService.toggleIngredient()` and `recipeService.selectedIds` instead.

**body.component.ts** — remove the direct `RECIPES` reference. Inject `RecipeService` and replace the template loop with `recipeService.filteredRecipes()`.

---

## Verification

Run `npm start` and confirm:
- Selecting no ingredients shows all recipes
- Selecting one ingredient shows only recipes that contain it
- Selecting two ingredients shows only recipes that contain both
- Deselecting an ingredient correctly expands the results again

---

## What to Avoid
- Do not add search bar logic yet, that comes in Task 10
- Do not add `imageUrl`, `description`, or any new fields to `Recipe` yet
