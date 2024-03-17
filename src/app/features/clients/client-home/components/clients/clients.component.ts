import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Client } from '../../../service/CLIENTS';
import { clientList } from '../../../service/mock-clients';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ 
    NgFor,
    CommonModule,],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  clients:Client[] = clientList;

  /**
   * defining here the client name
   */
  
  constructor(){
    
  }

}
