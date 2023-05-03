import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test','https://upload.wikimedia.org/wikipedia/commons/8/8a/Reindeer_steak.jpg'),
  new Recipe('Another Test Recipe', 'This is simply a test','https://upload.wikimedia.org/wikipedia/commons/8/8a/Reindeer_steak.jpg')];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
