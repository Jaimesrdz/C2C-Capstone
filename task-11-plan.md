# Task 11 Plan — Recipe Detail Page and Navigation

## Goal
Create a new page component that the user is navigated to when clicking a recipe card. Verify that clicking a recipe brings you to a new page.

---

## Files to Create

```
src/app/pages/recipe-detail/recipe-detail.component.ts
src/app/pages/recipe-detail/recipe-detail.component.html
src/app/pages/recipe-detail/recipe-detail.component.css
```

Selector: `app-recipe-detail`

The page can display just the recipe name for now — full content comes in Task 12.

---

## Routing

Update `src/app/app.routes.ts` to add two routes:

```
{ path: "",          component: ... }   // existing root view (header + body + sidebar)
{ path: "recipe/:id", component: RecipeDetailComponent }
```

The root path should point to the existing app shell. If it is currently rendered directly in `app.component.html` without a route, wrap it in a dedicated page component (e.g. `home.component.ts`) and route `/` to that, so both pages coexist cleanly under the router.

Ensure `<router-outlet>` is present in `app.component.html`.

---

## Navigation

In `body.component.html`, make each recipe card clickable by adding a `routerLink` that navigates to `/recipe/{{ recipe.id }}`.

Import `RouterLink` in `body.component.ts`.

---

## Verification

Run `npm start` and confirm:
- Clicking a recipe card navigates to `/recipe/<id>`
- The new page renders (even if mostly empty)
- The browser back button returns to the home page

---

## What to Avoid
- Do not add recipe content to the detail page yet, that comes in Task 12
- Do not use `router.navigate()` imperatively — `routerLink` is sufficient here
