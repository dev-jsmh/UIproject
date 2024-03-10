import { Component } from '@angular/core';
import { NavigationBarClientsComponent } from '../clients/components/navigationBar/navigation-bar-clients/navigation-bar-clients.component';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [
    NavigationBarClientsComponent
  ],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {

}
