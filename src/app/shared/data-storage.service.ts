import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  private url: string = "https://angular-recipe-book-e997f.firebaseio.com/";

  constructor(private http: Http, private authService: AuthService) {}

  saveRecipes(recipes: Recipe[]): Observable<Response> {
    const token = this.authService.getToken();
    return this.http.put(`${this.url}/recipes.json?auth=${token}`, recipes);
  }

  getRecipes(): Observable<Recipe[]> {
    const token = this.authService.getToken();
    return this.http.get(`${this.url}/recipes.json?auth=${token}`).map((response: Response) => {
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
