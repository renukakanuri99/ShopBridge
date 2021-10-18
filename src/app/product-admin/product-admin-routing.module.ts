import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewItemsComponent } from './view-items/view-items.component';
const routes: Routes = [
  {path: '', component: ViewItemsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductAdminRoutingModule { }
