import { Component } from '@angular/core';
import { ClientsComponent } from '../clients/clients.component';
@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [
    ClientsComponent
    ],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css'
})
export class ClientsListComponent {

}
