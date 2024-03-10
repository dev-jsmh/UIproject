import { Component } from '@angular/core';
import { NavigationBarClientsComponent } from '../navigationBar/navigation-bar-clients/navigation-bar-clients.component';
import { ClientSearchFormComponent } from '../client-search-form/client-search-form.component';
import { ClientsListComponent } from '../clients-list/clients-list.component';

@Component({
  selector: 'app-client-home',
  standalone: true,
  imports: [
    NavigationBarClientsComponent,
    ClientSearchFormComponent,
    ClientsListComponent
  ],
  templateUrl: './client-home.component.html',
  styleUrl: './client-home.component.css'
})
export class ClientHomeComponent {

}
