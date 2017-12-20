import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from "@angular/core";

import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;
  @Output("onIngredientAdded") ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  onAdd($event) {
    if (this.nameInput.nativeElement.value && this.amountInput.nativeElement.value) {
      this.ingredientAdded.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.valueAsNumber));
      this.nameInput.nativeElement.value = "";
      this.amountInput.nativeElement.value = "";
    }
  }
}
