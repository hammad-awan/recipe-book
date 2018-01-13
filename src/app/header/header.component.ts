import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";
import { Response } from "@angular/http";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService, private recipesService: RecipesService, private authService: AuthService) {}

  ngOnInit() {}

  onSaveData() {
    this.dataStorageService.saveRecipes(this.recipesService.getRecipes()).subscribe((response: Response) => console.log(response), err => console.log(err));
  }

  onFetchData() {
    this.dataStorageService.getRecipes().subscribe((recipes: Recipe[]) => this.recipesService.setRecipes(recipes), err => console.log(err));
  }

  onLogout() {
    this.authService.logout();
  }
}
