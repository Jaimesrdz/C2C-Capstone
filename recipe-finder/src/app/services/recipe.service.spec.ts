import { describe, it, expect, beforeEach } from 'vitest';
import { RecipeService } from './recipe.service';
import { RECIPES } from '../data/recipes';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(() => {
    service = new RecipeService();
  });

  it('returns all recipes when no filters are applied', () => {
    expect(service.filteredRecipes()).toHaveLength(RECIPES.length);
  });

  it('filters recipes by search query', () => {
    service.setSearchQuery('tacos');
    const results = service.filteredRecipes();
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('beef-tacos');
  });
});
