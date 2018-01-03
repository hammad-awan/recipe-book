import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Params } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { RecipesService } from "../recipes.service";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  theForm: FormGroup;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.recipe = this.recipesService.getRecipe(+params.id);
        this.initForm();
      } else {
        this.initForm();
      }
    });
  }

  private initForm() {
    let recipeName: string = null,
      imagePath: string = null,
      description: string = null;

    if (this.isEditMode()) {
      recipeName = this.recipe.name;
      imagePath = this.recipe.imagePath;
      description = this.recipe.description;
    }

    this.theForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(imagePath),
      description: new FormControl(description)
    });
  }

  onSave() {}

  private isEditMode(): boolean {
    return !!this.recipe;
  }
}
