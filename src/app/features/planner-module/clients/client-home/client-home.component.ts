import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { SpinnerComponent } from '../../../../core/spinner/spinner.component';
import { ClientModel } from '../../../../models/client-model';
import { ClientService } from '../../../../service/client.service';

@Component({
  selector: 'app-client-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgFor,
    NgIf,
    SpinnerComponent
  ],
  templateUrl: './client-home.component.html',
  styleUrl: './client-home.component.css'
})
export class ClientHomeComponent {

  public clients: ClientModel[] = [];

  public filteredClients: any[] = [
    {
      id: 1,
      names: "Jhonatan Samuel",
      lastNames: "Martinez",
      neighborhood: {
        name: "Los caracoles"
      }
    }
  ];
  public isLoaded: Boolean = false;

  /**
   * Inject the clientService class as a dependency
   * for the clients component
   */

  constructor(private clientService: ClientService) {

    // this.loadClients();

  }
  // make get request to api endpoint and loads the existing clients from data base
  loadClients() {
    this.clientService.getClients().subscribe({
      next: (res: any) => {
        this.clients = res;
        console.log(res);
        this.filteredClients = this.clients;
        this.isLoaded = true;
      },
      error: (error) => {
        console.log("Error al optener los clientes de la api. ", error);
        this.isLoaded = false;
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


  onFilter(value: String) {
    if (!value) {
      this.filteredClients = this.clients;
    }
    else {
      this.filteredClients = this.clients.filter(
        client => {
          client?.names
            .toLowerCase()
            .includes(value.toLowerCase())

        });
    }

  }

}
