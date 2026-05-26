# Task 8 Plan — Ingredient Toggle Buttons in Sidebar

## Goal
Populate the sidebar with a toggle button for each ingredient from `INGREDIENTS`. Each button should visually reflect whether it is selected or not. Verify all buttons appear and can be toggled.

---

## State

Add a `signal` to `sidebar.component.ts` to track which ingredient IDs are currently selected:

```
selectedIds = signal<Set<string>>(new Set());
```

Add a `toggleIngredient` method that adds or removes an ID from the set, replacing the signal value with a new `Set` so Angular detects the change:

```
toggleIngredient(id: string): void {
  const updated = new Set(this.selectedIds());
  updated.has(id) ? updated.delete(id) : updated.add(id);
  this.selectedIds.set(updated);
}
```

---

## Template

Import `INGREDIENTS` directly into `sidebar.component.ts` and loop over it in the template with `@for`, rendering a `<button>` per ingredient. Bind a CSS class conditionally to indicate the selected state (e.g. `[class.active]="selectedIds().has(ingredient.id)"`). Call `toggleIngredient` on click.

---

## Verification

Run `npm start`, open the sidebar, and confirm:
- A button appears for every ingredient
- Clicking a button changes its visual state (selected vs unselected)
- Clicking it again deselects it

---

## What to Avoid
- Do not wire the selected ingredients to recipe filtering yet, that comes in Task 9
- Do not pass `selectedIds` out of the sidebar yet
- Do not create a service yet
