import { Component } from '@angular/core';
import { ClientModel } from '../../../../../models/client-model';
import { ClientService } from '../../../../../service/client.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [
    RouterLink,
    NgFor
  ],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css'
})
export class ClientsListComponent {


  clients: ClientModel[] = [];
  // an array for store the filtered clients
  filteredClients: ClientModel[] = [];

  /**
   * Inject the clientService class as a dependency
   * for the clients component
   */

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    this.loadClients();
    this.filteredClients = this.clients;
  }
  // make get request to api endpoint and loads the existing clients from data base
  loadClients() {
    this.clientService.getClients().subscribe({
      next: (res: any) => {
        this.clients = res;
        console.log(res);
      },
      error: (error) => {
        console.log("Error al optener los clientes de la api. ", error);
      }
    });
  }
  // deletes a specified client by its id number
  deleteClient(id: Number) {
    this.clientService.deleteClient(id).subscribe(
      {
        next: (res: any) => {
          console.log(res)
          this.loadClients();
        },
        error: (error) => {
          console.log("client could have not been deleted correctly. ", error);
        }
      }
    );
  }

}
