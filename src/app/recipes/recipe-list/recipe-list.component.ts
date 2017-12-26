import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  @Output("onRecipeSelected") click: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onClick(recipe: Recipe) {
    this.click.emit(recipe);
    console.log(`Recipe clicked: ${recipe.name}`);
  }
}
