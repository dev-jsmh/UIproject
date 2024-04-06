import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { Client } from '../../../../../interfaces/IClient';
import { ClientService } from '../../../../../service/client.service';

@Component({
  selector: 'app-table-schedule-clients',
  standalone: true,
  imports: [
    RouterLink,
    NgFor
  ],
  templateUrl: './table-schedule-clients.component.html',
  styleUrl: './table-schedule-clients.component.css'
})
export class TableScheduleClientsComponent {

  clients:  Client[] = [];

// constructor of the class 
constructor(private clientService: ClientService){}

ngOnInit(): void {
  this.loadClients();
}

// ----------------------- methods of the component ----------------------
loadClients(){
  this.clientService.getClients().subscribe({
   next: (res: any) => {
    this.clients = res;
    console.log(res);
   },
   error: (error) => {
    console.log("Error al obtener clientes desde la base de datos. ", error)
   }
  })
}

}
