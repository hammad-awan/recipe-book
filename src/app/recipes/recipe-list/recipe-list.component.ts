import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipesChangedSubscription: Subscription;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesChangedSubscription = this.recipesService.recipesChanged.subscribe(recipes => {
      this.recipes = recipes;
    });

    this.recipes = this.recipesService.getRecipes();
  }

  ngOnDestroy() {
    this.recipesChangedSubscription.unsubscribe();
  }
}
