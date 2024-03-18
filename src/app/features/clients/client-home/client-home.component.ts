import { Component } from '@angular/core';
import { NavigationBarClientsComponent } from '../shared/navigationBar/navigation-bar-clients/navigation-bar-clients.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClientSearchFormComponent } from '../shared/client-search-form/client-search-form.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';

@Component({
  selector: 'app-client-home',
  standalone: true,
  imports: [ 
    RouterOutlet,
    RouterLink,
    ClientSearchFormComponent,
    ClientsListComponent,
    NavigationBarClientsComponent],
  templateUrl: './client-home.component.html',
  styleUrl: './client-home.component.css'
})
export class ClientHomeComponent {

}
