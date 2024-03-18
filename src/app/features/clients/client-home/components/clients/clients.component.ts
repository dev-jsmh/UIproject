import { CommonModule, NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Client } from '../../../service/IClient';
import { ClientService } from '../../../service/client.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ 
    
    NgFor,
    CommonModule,
    RouterLink
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  clients:Client[] = [];

  /**
   * Inject the clientService class as a dependency
   * for the clients component
   */

  constructor( clientService: ClientService ){

    /* set the return value of the 
    get clients method into the list 
    of clients 
    */
this.clients = clientService.getClients();
    
    
  }

}
