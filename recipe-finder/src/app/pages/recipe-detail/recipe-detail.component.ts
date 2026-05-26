import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { INGREDIENTS } from '../../data/ingredients';
import { Recipe } from '../../data/recipes';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  private readonly recipeService = inject(RecipeService);
  private readonly route = inject(ActivatedRoute);

  readonly recipe: Recipe | undefined = this.recipeService.getRecipeById(
    this.route.snapshot.paramMap.get('id') ?? ''
  );

  getIngredientLabel(id: string): string {
    return INGREDIENTS.find(i => i.id === id)?.label ?? id;
  }
}
