/*
Jhonatan Samuel Martinez Hernandez
Analisis y Desarrollo de Software
Año 2024
*/

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InventoryRootPageComponent } from './inventory-root-page/inventory-root-page.component';
import { ProductDashboardComponent } from './products/product-dashboard/product-dashboard.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsRootPageComponent } from './products/products-root-page/products-root-page.component';
import { RecordDashboardComponent } from './records/record-dashboard/record-dashboard.component';
import { RecordCreateComponent } from './records/record-create/record-create.component';
import { RecordDetailsComponent } from './records/record-details/record-details.component';
import { RecordUpdateComponent } from './records/record-update/record-update.component';
import { RecordRootComponent } from './records/record-root/record-root.component';
import { ProviderRootComponent } from './provideers/provider-root/provider-root.component';
import { ProviderUpdateComponent } from './provideers/provider-update/provider-update.component';
import { ProviderDetailsComponent } from './provideers/provider-details/provider-details.component';
import { ProviderCreateComponent } from './provideers/provider-create/provider-create.component';
import { ProviderDashboardComponent } from './provideers/provider-dashboard/provider-dashboard.component';


// inventory module routes 

export const inventoryRoutes: Routes = [
  {
    path: "",
    component: InventoryRootPageComponent,
    children: [
      { // routes for managing products
        path: 'products',
        component: ProductsRootPageComponent,
        children: [
          { path: '', component: ProductDashboardComponent },
          { path: ':id/update', component: ProductUpdateComponent },
          { path: ':id/details', component: ProductDetailsComponent },
          { path: 'create', component: ProductCreateComponent },

        ]
      },
      { // routes for managing records 
        path:"records",
        component: RecordRootComponent,
        children: [
          { path: '', component: RecordDashboardComponent },
          { path: "create", component: RecordCreateComponent },
          { path: ':id/details', component: RecordDetailsComponent },
          { path: ':id/update', component: RecordUpdateComponent }
        ]
      },
      {
        // routes for managing providers
        path: 'providers',
        component: ProviderRootComponent,
        children: [
          { path: '', component: ProviderDashboardComponent },
          { path: ':id/update', component: ProviderUpdateComponent },
          { path: 'id:details', component: ProviderDetailsComponent },
          { path: 'create', component: ProviderCreateComponent }
        ]
      },
      { path: '', redirectTo: 'products', pathMatch: 'full' }

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
