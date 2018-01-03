import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("theForm") theForm: NgForm;
  ingredient: Ingredient = null;
  selectIngredientSubscription: Subscription;


  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.selectIngredientSubscription = this.shoppingListService.selectIngredient.subscribe(ingredient => {
      this.ingredient = ingredient;
      this.theForm.setValue({
        name: ingredient.name,
        amount: ingredient.amount
      });
    });
  }

  ngOnDestroy() {
    this.selectIngredientSubscription.unsubscribe();
  }

  onAddItem(theForm: NgForm) {
    if (theForm.value.name && theForm.value.amount > 0) {
      const ingredient = new Ingredient(theForm.value.name, theForm.value.amount);
      if (this.isEditMode()) {
        const id = this.shoppingListService.getIngredientId(this.ingredient);
        this.shoppingListService.updateIngredient(id, ingredient);
        this.ingredient = null;
      } else {
        this.shoppingListService.addIngredient(new Ingredient(theForm.value.name, theForm.value.amount));
      }
      theForm.reset();
    }
  }

  onClear() {
    this.ingredient = null;
    this.theForm.reset();
  }

  onDelete() {
    this.shoppingListService.removeIngredient(this.ingredient);
    this.onClear();
  }

  isEditMode(){
    return !!this.ingredient;
  }
}
