import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ClientService } from '../../../service/client.service';
import { NeighborhoodService } from '../../../service/neighborhood.service';
import { Location, NgFor, NgIf } from '@angular/common';
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
  constructor( private _location: Location,
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
      names: ['', Validators.required],
      lastNames: ['', Validators.required],
      phone: ['', Validators.required],
      address: [''],
      neighborhood: ['', Validators.required]
    }
  );

  // function that sends data to create the new client
  onSubmit() {

    // verify if the minimun required data is filled
    if (
      this.createClientForm.controls.names.invalid ||
      this.createClientForm.controls.phone.invalid ||
      this.createClientForm.controls.neighborhood.invalid

    ) {
      // changes the variable to true if the required fields are not valid
      this.emptyOnSubmit = true;
      console.log("There are empty fields");
      console.log("You fill all the required data.");

    } else {
      // == extranting all client data from each Control of the form
    let dni = Number(this.createClientForm.get('dni')?.value);
      let names = this.createClientForm.get('names')?.value;
      let lastNames = this.createClientForm.get('lastNames')?.value;
      let phone = this.createClientForm.get('phone')?.value;
      let address = this.createClientForm.get('address')?.value;
      // extranting the id of neighborhood
      let neighborhood_id = Number(this.createClientForm.value.neighborhood);
      // create a new client object with the values that have beeen gotten from the form 
      const newClient = { dni, names, lastNames, phone, address};

      this.clientService.createClient(newClient, neighborhood_id);
      // reset the form 
      this.createClientForm.reset();
      // set the emptyOnSubmit variable to false if all the minimun required fields are filled correctly
      this.emptyOnSubmit = false;

    } // =============================================

  };

  // getters for each required control inside of the form

  public get names() {
    return this.createClientForm.get('names');
  }

  get lastNames() {
    return this.createClientForm.get('last_names');
  }

  get phone() {
    return this.createClientForm.get('phone');
  }

  get neighborhood() {
    return this.createClientForm.get('neighborhood');

  }


}
