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

  public isLoaded: Boolean = false;
  public clients: ClientModel[] = [];
  public filteredClients: any[] = this.clientService.clientTestCollection;

  constructor(private clientService: ClientService) {

    this.loadClients();

  }
  // make get request to api endpoint and loads the existing clients from data base
  public loadClients() {
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
  public deleteClient(id: Number) {
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


  public onFilter(value: String) {
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

  public validateStatus(client: ClientModel) {

    const lastmaintenance = client.lastMaintenance;
    const nextmaintenance = client.nextMaintenance;
    const hasBeenServed = client.hasBeenServed;

    // has not been served ever
    if (lastmaintenance == "" || lastmaintenance == null) {
      return "color: red";
    }

    // is not schedule
    if (nextmaintenance == "" || nextmaintenance == null) {
      return "color: orange";
    }

    const nextDate = new Date(nextmaintenance);
    const lastDate = new Date(lastmaintenance);
    const diff = nextDate.getTime() - Date.now();
    const diffdays = diff / (1000 * 60 * 60 * 24);

    // wating to be served
    if (nextmaintenance !== null && !hasBeenServed && diffdays <= 7) {
      return "color: yellow";
    }

    // has been served
    if (lastDate.getTime() < Date.now() && nextDate.getTime() > Date.now() && hasBeenServed == true) {
      return "color: green";
    }

    // not defined
    return "color: ffffff";

  }

}
