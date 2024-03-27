// Jhonatan Samuel Martinez Hernandez
// Análisis y desarrollo de software

import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Client } from '../service/IClient';
import { ClientService } from '../service/client.service';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-modify',
  standalone: true,
  imports: [
    ReactiveFormsModule,
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

  /* Define here the a form model to modify / update clients information save in the data base*/
modifyClientForm = new FormGroup(
  {
    clientIdCard: new FormControl(""),
    clientFirstName:  new FormControl(""),
    clientSecundtName: new FormControl(""),
    clientFirstLastName: new FormControl(""),
    clientSecundLastName: new FormControl(""),
    clientPhone: new FormControl(""),
    clientAddress: new FormControl(""),
    clientNeighborhood: new FormControl(""),
  }
);
// this method submit the data of the client that we collected from the form
// and sends it to client service
submitClient(){
  this.clientService.submitClient(
    this.modifyClientForm.value.clientFirstName ?? '',
    this.modifyClientForm.value.clientSecundtName ?? '',
  this.modifyClientForm.value.clientFirstLastName ?? '',
  this.modifyClientForm.value.clientSecundLastName ?? '',
    this.modifyClientForm.value.clientPhone ?? '',
    this.modifyClientForm.value.clientAddress ?? '',
    this.modifyClientForm.value.clientNeighborhood ?? '',

  );
}

}
