import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ClientService } from '../../../service/client.service';
import { NeighborhoodService } from '../../../service/neighborhood.service';
import { NgFor, NgIf } from '@angular/common';
import { NeighborhoodModel } from '../../../models/neighborhood-model';
import { ClientModel } from '../../../models/client-model';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    BackButtonComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {

  neighborhoods: NeighborhoodModel[] = [];

  emptyOnSubmit: Boolean = false;



  // inject th clientService to handle data 
  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private neighborhoodService: NeighborhoodService) {

    // call the service and made a get request of all existing neighborhoods to the correspoing api enpoint
    this.neighborhoodService.getAllNeighborhoods().subscribe({
      next: (res: any) => {
        this.neighborhoods = res;
        console.log(this.neighborhoods);
      },
      error: (error) => {
        console.log("There have been and error when trying to get the neighborhoods. ", error)
      }
    });

  }


  /** Here i created a form to handle data 
   * in order to create clients in the program
   */
  createClientForm = this.fb.group(
    {
      dni: [''],
      first_name: ['', Validators.required],
      secund_name: [''],
      first_lastname: ['', Validators.required],
      secund_lastname: [''],
      phone: ['', Validators.required],
      address: [''],
      neighborhood: ['', Validators.required],
    }
  );

  // function that sends data to create the new client
  onSubmit() {

    // verify if the minimun required data is filled
    if (
      this.createClientForm.controls.first_name.invalid ||
      this.createClientForm.controls.first_lastname.invalid ||
      this.createClientForm.controls.phone.invalid ||
      this.createClientForm.controls.neighborhood.invalid

    ) {
      // changes the variable to true if the required fields are not valid
      this.emptyOnSubmit = true;
      console.log("There are empty fields");
      console.log("You fill all the required data.");


    } else {
      // == extranting all client data from each Control of the form
      let first_name = this.createClientForm.get('first_name')?.value;
      let secund_name = this.createClientForm.get('secund_name')?.value;
      let first_lastname = this.createClientForm.get('first_lastname')?.value;
      let secund_lastname = this.createClientForm.get('secund_lastname')?.value;
      let phone = this.createClientForm.get('phone')?.value;
      let address = this.createClientForm.get('address')?.value;
      // extranting the id of neighborhood
      let neighborhood_id = Number(this.createClientForm.value.neighborhood);
      // create a new client object with the values that have beeen gotten from the form 
      const newClient = new ClientModel(first_name!, secund_name!, first_lastname!, secund_lastname!, phone!, address!);

      this.clientService.submitClient(newClient, neighborhood_id);
      // reset the form 
      this.createClientForm.reset();
      // set the emptyOnSubmit variable to false if all the minimun required fields are filled correctly
      this.emptyOnSubmit = false;

    } // =============================================

  };

  // getters for each required control inside of the form

  public get first_name() {
    return this.createClientForm.get('first_name');
  }

  get first_lastname() {
    return this.createClientForm.get('first_lastname');
  }

  get phone() {
    return this.createClientForm.get('phone');
  }

  get neighborhood() {
    return this.createClientForm.get('neighborhood');

  }

  

}
