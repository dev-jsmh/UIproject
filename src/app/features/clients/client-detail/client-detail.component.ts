import { Component } from '@angular/core';
import { NavigationBarClientsComponent } from '../shared/navigationBar/navigation-bar-clients/navigation-bar-clients.component';
import { ClientService } from '../service/client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../service/IClient';
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

  client: Client | undefined;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute 
  ){
// get client's id from the url
    const clientId = Number(this.route.snapshot.params['id']);
    
    /* find the client on the list 
    and assign it to the client variable
    */
   this.client = this.clientService.getClientById(clientId);

  }

}
