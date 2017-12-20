import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg"),
    new Recipe("A Test Recipe 2", "This is simply a test 2", "http://media2.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg")
  ];

  @Output("onRecipeSelected") click: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onClick(recipe: Recipe) {
    this.click.emit(recipe);
    console.log(`Recipe clicked: ${recipe.name}`);
  }
}
