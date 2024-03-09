import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';
import { ClientsListComponent } from './features/clients/clients-list/clients-list.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'clients', component:ClientsListComponent},
    {path: '**', component: PageNotFoundComponent}
];
