import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'clients', loadChildren:() => import('./features/clients/client-routing.module').then(mod => mod.ClientRoutsModule) },
    {path:'planner', loadChildren: () => import('./features/planner-module/client-scheduler-routing.module').then(mod => mod.ClientSchedulerRoutingModule)},
    {path: 'inventory', loadChildren: () => import('./features/inventory/inventory-routing.module').then( mod => mod.InventoryRoutingModule ) },
    {path: '**', component: PageNotFoundComponent}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
