/*
Jhonatan Samuel Martinez Hernandez
Analisis y Desarrollo de Software
Año 2024
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InventoryRootPageComponent } from './inventory-root-page/inventory-root-page.component';
import { ProductDashboardComponent } from './products/product-dashboard/product-dashboard.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsRootPageComponent } from './products/products-root-page/products-root-page.component';


// inventory module routes 

export const inventoryRoutes: Routes = [
  {
    path: "",
    component: InventoryRootPageComponent,
    children: [
      {
        path: 'products',
        component: ProductsRootPageComponent,
        children: [
          { path: '', component: ProductDashboardComponent },
          { path: ':id/update', component: ProductUpdateComponent },
          { path: ':id/details', component: ProductDetailsComponent },
          { path: 'create', component: ProductCreateComponent },

        ]
      },
      { path: '', redirectTo: 'products/dashboard', pathMatch: 'full' }

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(inventoryRoutes),
    CommonModule
  ], exports: [RouterModule]
})
export class InventoryRoutingModule {



}
