import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredentsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('tomatoes', 10)
        ];
      
        getIngredients(){
            return this.ingredients.slice();
        }

        addIngredient(ingredient: Ingredient){
            this.ingredients.push(ingredient);
            this.ingredentsChanged.emit(this.ingredients.slice());
        }

        addIngredients(ingredients: Ingredient[]){
            // for (let ingredient of ingredients){
            //     this.addIngredient(ingredient);
            // }
            this.ingredients.push(...ingredients);
            this.ingredentsChanged.emit(this.ingredients.slice());
        }
}