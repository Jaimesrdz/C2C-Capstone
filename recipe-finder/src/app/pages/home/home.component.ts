import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BodyComponent } from '../../components/body/body.component';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isOpen = signal(false);
  private readonly recipeService = inject(RecipeService);

  toggleSidebar(): void {
    this.isOpen.set(!this.isOpen());
  }

  onQueryChange(query: string): void {
    this.recipeService.setSearchQuery(query);
  }
}
