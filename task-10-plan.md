# Task 10 Plan — Search Bar Functionality

## Goal
Wire the header's search bar so that typing filters the displayed recipes by name. Verify that searching a specific dish name narrows the results correctly.

---

## Changes to RecipeService

Add a `searchQuery` signal and fold it into the existing `filteredRecipes` computed:

```
searchQuery = signal<string>("")

filteredRecipes = computed<Recipe[]>(() => {
  let results = RECIPES;

  if (selectedIds().size > 0)
    results = results.filter(recipe =>
      [...selectedIds()].every(id => recipe.ingredients.includes(id))
    );

  if (searchQuery().trim() !== "")
    results = results.filter(recipe =>
      recipe.name.toLowerCase().includes(searchQuery().trim().toLowerCase())
    );

  return results;
})

setSearchQuery(query: string): void
```

Both filters chain — a user can have ingredients selected and a search query active at the same time.

---

## Changes to Existing Components

**header.component.ts** — add an `Output` event emitter named `queryChange` that emits the input's current value on every keystroke (`(input)` event). 

**app.component.ts** — bind `(queryChange)` on `<app-header>` and call `recipeService.setSearchQuery()` with the emitted value.

---

## Verification

Run `npm start` and confirm:
- Typing a recipe name into the search bar filters the displayed recipes in real time
- Clearing the search bar restores the full list (or the ingredient-filtered list if buttons are still selected)
- Search is case-insensitive

---

## What to Avoid
- Do not search across ingredients or instructions yet — name only is sufficient for this task
- Do not debounce the input yet
