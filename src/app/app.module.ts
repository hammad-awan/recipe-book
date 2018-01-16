import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { AppRouting } from "./routing.module";
import { SelectRecipeComponent } from "./recipes/select-recipe/select-recipe.component";
import { HttpModule } from "@angular/http";
import { RecipesService } from "./recipes/recipes.service";
import { DataStorageService } from "./shared/data-storage.service";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthService } from "./auth/auth.service";
import { RecipesModule } from "./recipes/recipes.module";
import { RecipesRoutingModule } from "./recipes/recipes-routing.module";
import { SharedModule } from "./shared/shared.module";
import { AuthGuardService } from "./auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SelectRecipeComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [BrowserModule, AppRouting, FormsModule, HttpModule, RecipesModule, RecipesRoutingModule, SharedModule],
  providers: [ShoppingListService, RecipesService, DataStorageService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
