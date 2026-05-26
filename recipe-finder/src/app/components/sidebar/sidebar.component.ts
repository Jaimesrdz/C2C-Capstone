import { Component, Input, inject } from '@angular/core';
import { INGREDIENTS, Ingredient } from '../../data/ingredients';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() visible: boolean = false;

  readonly ingredients: Ingredient[] = INGREDIENTS;
  protected readonly recipeService = inject(RecipeService);
}
