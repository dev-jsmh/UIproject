// Jhonatan Samuel Martinez Hernandez
// Análisis y desarrollo de software

import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClientService } from '../../../service/client.service';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientModel } from '../../../models/client-model';
import { NeighborhoodModel } from '../../../models/neighborhood-model';
import { NeighborhoodService } from '../../../service/neighborhood.service';
import { Location, NgFor } from '@angular/common';
import { ClienteModalComponent } from '../shared/cliente-modal/cliente-modal.component';


@Component({
  selector: 'app-client-modify',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    BackButtonComponent,
    NgFor,
  ],
  templateUrl: './client-modify.component.html',
  styleUrl: './client-modify.component.css'
})
export class ClientModifyComponent {

  // create a fiel for store the client variable 
  public desiredClient: ClientModel | undefined;
  public neighborhoods: NeighborhoodModel[] | undefined;
  // get the id from the url to modify the client data
  public clientId = parseInt(this.route.snapshot.params['id']);
    
  public modifyClient!: FormGroup;
  
  // ================================ form ==================================

  // inject dependencies inside the constructor
  constructor(
    private clientService: ClientService,
    private neighborhoodService: NeighborhoodService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
   private _location: Location,
    private _router: Router) {

    // get the specified client with its id and assign it to the client field
    this.clientService.getClientById(this.clientId).subscribe({
      next: (desiredClient: any) => {
        // assing desired cliente 
        this.desiredClient = desiredClient;
         // ================================ form ==================================
        // assign the form builder to the form group
        /* Define here the a form model to modify update clients information save in the data base*/

        this.modifyClient = this.fb.group(
          {
            id: [this.desiredClient?.id],
            dni: [this.desiredClient?.dni],
            first_name: [this.desiredClient?.first_name, Validators.required],
            secund_name: [this.desiredClient?.secund_name],
            first_lastname: [this.desiredClient?.first_lastname, Validators.required],
            secund_lastname: [this.desiredClient?.secund_lastname],
            phone: [this.desiredClient?.phone, Validators.required],
            address: [this.desiredClient?.address],
            neighborhood: [this.desiredClient?.neighborhood?.id, Validators.required],

          }
        );
        // ================================ form ==================================
        

        let n = this.desiredClient?.neighborhood?.id;
        console.log(n);
      },
      error: (error) => {
        console.log("Error al optener los datos del cliente solicitado.", error);
        console.log(error);
      }
    });

   

    // ====================== call the service and get neighborhoods =======================
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
    // =============================== get neighborhoods ===================================

  };

  // a go back button when canceling an action
  goBack(){
    this._location.back();
  }

  // this method submit the data of the client that we collected from the form
  // and sends it to client service
  submitClient() {
    // extract values from each required control of the form;
    let id = Number(this.modifyClient.get('id')?.value);
    let dni = Number(this.modifyClient.get('dni')?.value);
    let first_name = this.modifyClient.get('first_name')?.value;
    let secund_name = this.modifyClient.get('secund_name')?.value;
    let first_lastname = this.modifyClient.get('first_lastname')?.value;
    let secund_lastname = this.modifyClient.get('secund_lastname')?.value;
    let phone = this.modifyClient.get('phone')?.value;
    let address = this.modifyClient.get('address')?.value;
    let neighborhood_id = Number(this.modifyClient.get('neighborhood')?.value);
    // create new instance of client and assign the extracted values
    const modclient = new ClientModel(dni!, first_name!, secund_name!, first_lastname!, secund_lastname!, phone!, address!);

    // make put request to clients enpoint 
    this.clientService.modifyClient(modclient, this.clientId , neighborhood_id);
    // takes to the home     of clients
    //this.router.navigateByUrl("/clients");
  };

}
