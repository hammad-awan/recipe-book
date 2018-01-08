import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class DataStorageService {
  private url: string = "https://angular-recipe-book-e997f.firebaseio.com/";

  constructor(private http: Http) {}

  saveRecipes(recipes: Recipe[]): Observable<Response> {
    return this.http.put(`${this.url}/recipes.json`, recipes);
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(`${this.url}/recipes.json`).map((response: Response) => {
      const recipes = response.json() as Recipe[];
      for (const recipe of recipes) {
        if (!recipe.ingredients) {
          recipe.ingredients = [];
        }
      }
      return recipes;
    });
  }
}
