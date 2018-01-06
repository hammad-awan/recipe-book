import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Params } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators, ValidatorFn } from "@angular/forms";
import { RecipesService } from "../recipes.service";
import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  theForm: FormGroup;
  recipe: Recipe;
  private amountValidator: ValidatorFn = Validators.pattern(/^[1-9]+[0-9]*$/);

  constructor(private route: ActivatedRoute, private recipesService: RecipesService, private router: Router) {}

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
    let ingredientsFormArray = new FormArray([]);

    if (this.isEditMode()) {
      recipeName = this.recipe.name;
      imagePath = this.recipe.imagePath;
      description = this.recipe.description;
      if (this.recipe.ingredients) {
        for (let ingredient of this.recipe.ingredients) {
          ingredientsFormArray.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, this.amountValidator])
            })
          );
        }
      }
    }

    this.theForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: ingredientsFormArray
    });
  }

  onSubmit() {
    if (this.isEditMode()) {
      const id = this.recipesService.getRecipeId(this.recipe);
      this.recipesService.updateRecipe(id, this.theForm.value);
    } else {
      this.recipesService.addRecipe(this.theForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  onAddIngredient() {
    let formArray = this.getIngredientsControl();
    formArray.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, this.amountValidator])
      })
    );
  }

  onDeleteIngredient(index: number) {
    let formArray = this.getIngredientsControl();
    formArray.removeAt(index);
  }

  private getIngredientsControl() : FormArray{
    return this.theForm.get("ingredients") as FormArray;
  }

  private isEditMode(): boolean {
    return !!this.recipe;
  }
}
