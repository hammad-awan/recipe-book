import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "../recipes/recipe.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  selectIngredient = new Subject<Ingredient>();

  private ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(recipe: Recipe) {
    this.ingredients.push(...recipe.ingredients);
    this.onIngredientsChanged();
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(id: number): Ingredient {
    return this.ingredients[id];
  }

  getIngredientId(ingredient: Ingredient): number {
    let index = -1;
    this.ingredients.find((ing, i) => {
      if (ingredient === ing) {
        index = i;
        return true;
      }
      return false;
    });
    return index;
  }

  updateIngredient(id: number, ingredient: Ingredient) {
    this.ingredients[id] = ingredient;
    this.onIngredientsChanged();
  }

  removeIngredient(ingredient: Ingredient) {
    const id = this.getIngredientId(ingredient);
    this.ingredients.splice(id, 1);
    this.onIngredientsChanged();
  }

  private onIngredientsChanged() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
