import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../service/client.service';



@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    BackButtonComponent
  ],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {

  // inject th clientService to handle data 

  constructor(private clientService: ClientService) {

  }


  /** Here i created a form to handle data 
   * in order to create clients in the program
   */
  createClientForm = new FormGroup(
    {
      clientIdCard: new FormControl(""),
      clientFirstName: new FormControl(""),
      clientSecundtName: new FormControl(""),
      clientFirstLastname: new FormControl(""),
      clientSecundLastname: new FormControl(""),
      clientPhone: new FormControl(""),
      clientAddress: new FormControl(""),
      clientNeighborhood: new FormControl(""),
    }
  );

  // function that sends data to create the new client
  submitClient() {
    // call the service of clients
    this.clientService.submitClient(
      this.createClientForm.value.clientFirstName ?? '',
      this.createClientForm.value.clientSecundtName ?? '',

      this.createClientForm.value.clientFirstLastname ?? '',
      this.createClientForm.value.clientSecundLastname ?? '',
      this.createClientForm.value.clientPhone ?? '',
      this.createClientForm.value.clientAddress ?? '',
      this.createClientForm.value.clientNeighborhood ?? '',
    );
  };
}
