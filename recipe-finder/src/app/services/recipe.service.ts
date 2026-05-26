import { Injectable, signal, computed } from '@angular/core';
import { RECIPES, Recipe } from '../data/recipes';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  selectedIds = signal<Set<string>>(new Set());
  searchQuery = signal<string>('');

  filteredRecipes = computed<Recipe[]>(() => {
    let results = RECIPES;

    if (this.selectedIds().size > 0) {
      results = results.filter(recipe =>
        [...this.selectedIds()].every(id => recipe.ingredients.includes(id))
      );
    }

    const query = this.searchQuery().trim().toLowerCase();
    if (query !== '') {
      results = results.filter(recipe =>
        recipe.name.toLowerCase().includes(query)
      );
    }

    return results;
  });

  toggleIngredient(id: string): void {
    const updated = new Set(this.selectedIds());
    updated.has(id) ? updated.delete(id) : updated.add(id);
    this.selectedIds.set(updated);
  }

  setSearchQuery(query: string): void {
    this.searchQuery.set(query);
  }

  getRecipeById(id: string): Recipe | undefined {
    return RECIPES.find(r => r.id === id);
  }
}
