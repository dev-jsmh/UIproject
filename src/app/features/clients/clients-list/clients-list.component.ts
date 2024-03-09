import { Component } from '@angular/core';
import { NavigationBarClientsComponent } from '../components/navigationBar/navigation-bar-clients/navigation-bar-clients.component';
@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [NavigationBarClientsComponent],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css'
})
export class ClientsListComponent {

}
