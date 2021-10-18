import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewItemsComponent } from './view-items/view-items.component';
import { ProductAdminRoutingModule } from './product-admin-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewItemsComponent],
  imports: [
    CommonModule,
    ProductAdminRoutingModule,
    FormsModule
  ]
})
export class ProductAdminModule { }
