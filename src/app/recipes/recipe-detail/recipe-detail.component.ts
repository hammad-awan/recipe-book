import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipesService } from "./../recipes.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipesService.getRecipe(+params.id);
      if (!this.recipe) {
        this.router.navigate(["../"], { relativeTo: this.route });
      }
    });
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe);
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.recipe);
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
