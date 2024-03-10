import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';
import { ClientHomeComponent } from './features/clients/components/client-home/client-home.component';
import { ClientDetailComponent } from './features/client-detail/client-detail.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'clients', component: ClientHomeComponent},
    {path: 'clients/1/details', component:ClientDetailComponent},
    {path: '**', component: PageNotFoundComponent}
];
