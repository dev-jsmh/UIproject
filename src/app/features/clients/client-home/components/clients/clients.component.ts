// Jhonatan Samuel Martinez Hernandez
// Análisis y desarrollo de software

import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Client } from '../../../service/IClient';
import { ClientService } from '../../../service/client.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ 
    
    NgFor,
    CommonModule,
    RouterLink
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {

  clients:Client[] = [];

  /**
   * Inject the clientService class as a dependency
   * for the clients component
   */

  constructor( private clientService: ClientService ){}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      console.log(clients);
      this.clients = clients;
    });
  }

}
