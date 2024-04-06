// Jhonatan Samuel Martinez Hernandez
// Análisis y desarrollo de software

import { Component } from '@angular/core';
import { NavigationBarClientsComponent } from '../shared/navigationBar/navigation-bar-clients/navigation-bar-clients.component';
import { ClientService } from '../../../service/client.service';
import { ActivatedRoute } from '@angular/router';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
import { NgFor, NgIf } from '@angular/common';
import { ClientModel } from '../../../models/client-model';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [
    NavigationBarClientsComponent,
    BackButtonComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {

  // create a fiel in the class for store the client variable
  // this will get an observable or undefined 
  client: ClientModel | undefined;

  clientHasServices: Boolean | undefined;
  clientHasProducts: Boolean | undefined;


  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {

    /* find the client on the list 
    and assign it to the client variable
    */
    const clientId = parseInt(this.route.snapshot.params['id']);
    
    try {
      // makes an http get request and return the desired client
      this.clientService.getClientById(clientId).subscribe(client => {
        /// prints the result in the console
        console.log("client full data ", client);
        // assign the result to the client properti of this component
        this.client = client;

        this.getChargedProducts(client);
        this.getChargedServices(client);

      })
    } catch (error) {
      console.log("Error al realizar peticion del cliente a la api", error);
      
    }
   
    

   

  }
 
    // validates if there are any services contained in the array
  getChargedProducts(client: ClientModel): void {
    if (client.purchased_services.length === 0) {
      // false if result equals to 0
      this.clientHasServices = false;
    } else {
      // else true, if it contain at least 1 result 
      this.clientHasServices = true;
    }
  }

  getChargedServices(client: ClientModel): void {
    if (client.products.length === 0) {
      this.clientHasProducts = false;
    } else {
      this.clientHasProducts = true;
    }
  }
  // Get client's id from the url

}


