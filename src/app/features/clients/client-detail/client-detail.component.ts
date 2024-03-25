// Jhonatan Samuel Martinez Hernandez
// Análisis y desarrollo de software

import { Component } from '@angular/core';
import { NavigationBarClientsComponent } from '../shared/navigationBar/navigation-bar-clients/navigation-bar-clients.component';
import { ClientService } from '../service/client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../service/IClient';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [
    NavigationBarClientsComponent,
    BackButtonComponent
  ],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {

  // create a fiel in the class for store the client variable
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
