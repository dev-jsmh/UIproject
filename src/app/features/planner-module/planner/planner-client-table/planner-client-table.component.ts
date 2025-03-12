/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Developer
 * Year 2024
 * May 
 */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ClientModel } from '../../../../models/client-model';
import { ClientService } from '../../../../service/client.service';
import { SpinnerComponent } from '../../../../core/spinner/spinner.component';




@Component({
  selector: 'app-planner-client-table',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    NgIf,
    SpinnerComponent,
    FormsModule
  ],
  templateUrl: './planner-client-table.component.html',
  styleUrl: './planner-client-table.component.css'
})
export class PlannerClientTableComponent {

  // filter clients by a parameter
  public searchInput: string = "";

  loadingClients: Boolean = true;

  // defined an array to store the clients
  clients: ClientModel[] = [];

  filteredClients: ClientModel[] = [];

  // create the constructor 
  // inject the Clientservice class as a dependency 
  constructor(private clientService: ClientService) {

    // use the method to get clients from data base
    this.loadClients();



  }

  //  use the service to make a get request and ritrive all the existing clients from data base
  loadClients() {
    this.clientService.getClients().subscribe({
      next: (res: any) => {
        this.filteredClients = res;
        console.log(res);
        this.loadingClients = false;
      },
      error: (error) => {
        console.log("Error al optener clientes desde la base de datos: ");
        console.log(error);
      }
    });
  }


  /** change color of indicator to inform a client state  */


}



/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Developer
 * Year 2024
 * May 
 */
