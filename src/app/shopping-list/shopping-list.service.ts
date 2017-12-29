import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "../recipes/recipe.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(recipe: Recipe){
      this.ingredients.push(...recipe.ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
    }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
}
