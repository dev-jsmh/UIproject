import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'clients', loadChildren:() => import('./features/clients/client-routing.module').then(mod => mod.ClientRoutsModule) },
    {path:'scheduler', loadChildren: () => import('./features/scheduler/client-scheduler-routing.module').then(mod => mod.ClientSchedulerRoutingModule)},
    {path: '**', component: PageNotFoundComponent}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
