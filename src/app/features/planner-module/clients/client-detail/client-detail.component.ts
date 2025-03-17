// Jhonatan Samuel Martinez Hernandez
// Análisis y desarrollo de software

import { Component } from '@angular/core';
import { NavigationBarClientsComponent } from '../shared/navigationBar/navigation-bar-clients/navigation-bar-clients.component';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
import { Location, NgFor, NgIf } from '@angular/common';
import { ClientModel } from '../../../../models/client-model';
import { ClientService } from '../../../../service/client.service';
import { ServiceModel } from '../../../../models/service-model';


@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [
    NavigationBarClientsComponent,
    BackButtonComponent,
    NgFor,
    NgIf,
    RouterLink
  ],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {

  // create a fiel in the class for store the client variable
  // this will get an observable or undefined 
  public client: ClientModel = new ClientModel();
  public clientHasServices: Boolean = false;
  public clientHasProducts: Boolean = false;
  public clientPurchasedServices: ServiceModel[] = [];

  // get the client id from url params
  clientId = parseInt(this.route.snapshot.params['id']);


  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private _router: Router,
    private _location: Location
  ) {
    // makes an http get request and return the desired client
    this.clientService.getClientById(this.clientId).subscribe(
      {
        next: (res) => {/// prints the result in the console
          console.log("client full data ", res);
          // assign the result to the client properti of this component
          this.client = res;
          this.clientPurchasedServices = res.purchased_services;

          this.getChargedProducts(res);
          this.getChargedServices(res);
        }, error: (error) => {
          console.log("Error al realizar peticion del cliente a la api", error);
        }
      });
  }

  // go back button functionality 
  public goBack() {
    this._location.back();
  }

    // validates if there are any services contained in the array
    getChargedProducts(client: ClientModel): void {
      if(client.purchased_services?.length === 0) {
      // false if result equals to 0
      this.clientHasServices = false;
    } else {
      // else true, if it contain at least 1 result 
      this.clientHasServices = true;
    }
  }

  getChargedServices(client: ClientModel): void {
    if (client.products?.length === 0) {
      this.clientHasProducts = false;
    } else {
      this.clientHasProducts = true;
    }
  }
  // Get client's id from the url

  // delete client form data base
  deleteClient(client_Id: Number) {
    // calls the service and makes a delete request
    this.clientService.deleteClient(client_Id).subscribe(
      client => {
        console.log(client);
      }
    )
    this.goBack();
  }

  modifyClient(client_Id: Number) {
    // takes user to a view where is able to modify client data
    this._router.navigateByUrl(`clients/${client_Id}/modify`);
  }

}


