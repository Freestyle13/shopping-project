import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Schnitzel',
         'Crispy Chicken',
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2010%2F11%2F28%2Fschnitzel-243_640.jpg&f=1&nofb=1&ipt=83255be6f3d6271b11621c69c69dda68bfb29e54386634e7c6d995e4c3a5d97b&ipo=images',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]),
        new Recipe('Burger',
         'Tasty',
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fburger-close-up-delicious-fast-food-food-photography-fresh-hamburger-junk-food-snack-tasty-unhealthy-1556239.jpg&f=1&nofb=1&ipt=5ec815876657d70f875ecba36e763ba689c4987c50563fd016ee9267ce4896f8&ipo=images',
          [
            new Ingredient('Buns',2),
            new Ingredient('meat', 1)
          ])
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}