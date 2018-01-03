import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "A Test Recipe 2",
      "This is simply a test 2",
      "http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  getRecipeId(recipe: Recipe): number {
    let index = -1;
    this.recipes.find((r, i) => {
      if (r === recipe) {
        index = i;
        return true;
      }
      return false;
    });
    return index;
  }
}
