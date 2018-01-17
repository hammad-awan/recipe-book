import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ShoppingListComponent, ShoppingEditComponent]
})
export class ShoppingListModule { }
