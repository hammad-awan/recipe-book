import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { SharedModule } from "./shared/shared.module";
import { RecipesModule } from "./recipes/recipes.module";
import { AuthModule } from "./auth/auth.module";

import { AppRouting } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";

import { AuthGuardService } from "./auth/auth-guard.service";
import { AuthService } from "./auth/auth.service";
import { DataStorageService } from "./shared/data-storage.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipesService } from "./recipes/recipes.service";

@NgModule({
  imports: [BrowserModule, AppRouting, HttpModule, RecipesModule, SharedModule, AuthModule, ShoppingListModule],
  declarations: [HeaderComponent, AppComponent],
  providers: [AuthGuardService, AuthService, DataStorageService, RecipesService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
