import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output('onRecipesSelected') recipesSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output('onShoppingListSelected') shoppingListSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onRecipesClicked() {
    this.recipesSelected.emit();
  }

  onShoppingListClicked() {
    this.shoppingListSelected.emit();
  }
}
