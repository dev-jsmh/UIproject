import { Injectable } from '@angular/core';
import { Client } from './IClient';
@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  /**
   * i defined here an array for the clients data
   */
  private ClientList: Client[] = [
    {
      id: 1,
      name: "jhonatan",
      lastName: "Martinez",
      neighborhood: "Los caracoles"
    },
    {
      id: 2,
      name: "Angel",
      lastName: "Martinez",
      neighborhood: "Los caracoles"
    },
    {
      id: 3,
      name: "Maria Luisa",
      lastName: "Martinez",
      neighborhood: "Los caracoles"
    },
    {
      id: 4,
      name: "Erick",
      lastName: "Martinez",
      neighborhood: "Los caracoles"
    },
    {
      id: 4,
      name: "Manuel",
      lastName: "Palomino",
      neighborhood: "San Fernando"
    },
    {
      id: 6,
      name: "Dana",
      lastName: "Palomino",
      neighborhood: "San Fernando"
    },
    {
      id: 7,
      name: "Mari Sol",
      lastName: "Palomino",
      neighborhood: "San Fernando"
    },
    {
      id: 8,
      name: "Mari Jose",
      lastName: "Palomino",
      neighborhood: "San Fernando"
    }
  ];
  constructor() { }
  /**
   * Here i created a method to get all the 
   * clients that exists and i will return 
   * an array of them
   */
  getAllClients(): Client[] {
    return this.ClientList;
  }

  getClientById(id: Number): Client | undefined {
    return this.ClientList.find(
      client => client.id === id
    );

  }

}
