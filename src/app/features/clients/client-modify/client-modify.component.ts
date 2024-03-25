// Jhonatan Samuel Martinez Hernandez
// Análisis y desarrollo de software

import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Client } from '../service/IClient';
import { ClientService } from '../service/client.service';
import { BackButtonComponent } from '../shared/back-button/back-button.component';

@Component({
  selector: 'app-client-modify',
  standalone: true,
  imports: [
    RouterLink,
    BackButtonComponent
   ],
  templateUrl: './client-modify.component.html',
  styleUrl: './client-modify.component.css'
})
export class ClientModifyComponent {

  // create a fiel for store the client variable 
  client: Client | undefined;

  // inject dependencies inside the constructor
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute)
    {
    // get the id from the url to modify the client data
    const clientId = Number(this.route.snapshot.params['id']);
    this.client = clientService.getClientById(clientId);
  }
}
