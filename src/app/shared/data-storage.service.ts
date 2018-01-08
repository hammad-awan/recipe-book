import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { RecipesService } from "../recipes/recipes.service";
import "rxjs/Rx";

@Injectable()
export class DataStorageService {
  private url: string = "https://angular-recipe-book-e997f.firebaseio.com/";

  constructor(private http: Http, private recipesService: RecipesService) {}

  saveRecipes(): Observable<Response> {
    return this.http.put(`${this.url}/recipes.json`, this.recipesService.getRecipes());
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(`${this.url}/recipes.json`).map((response: Response) => {
      return <Recipe[]>response.json();
    });
  }
}
