import { Injectable } from '@angular/core';
import { Client } from './IClient';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
/*
   * i defined here an array for the clients data
   */
private ClientList: Client[] = [
  {
    id: 1,
    profileImg: "profile img",
    name: "Dummy",
    lastName: "Client",
    neighborhood: "noodland",
    lastMeet: "15 julio 2023",
    purchasedServices: {
      product:'P001 ------ TEST'

    }
       
    ,
    purchasedProducts: []
  },
  {
    id: 1,
    profileImg: "profile img",

    name: "jhonatan",
    lastName: "Martinez",
    neighborhood: "Los caracoles",
    lastMeet: "5 Marzo 2023",
    purchasedServices: [],
    purchasedProducts: []
  },
  {
    id: 2,
    profileImg: "profile img",

    name: "Angel",
    lastName: "Martinez",
    neighborhood: "Los caracoles",
    lastMeet: "1 Octubre 2023",
    purchasedServices: [],
    purchasedProducts: []
  },
  {
    id: 3,
    profileImg: "profile img",

    name: "Maria Luisa",
    lastName: "Martinez",
    neighborhood: "Los caracoles",
    lastMeet: "09 enero 2023",
    purchasedServices: [],
    purchasedProducts: []
  },
  {
    id: 4,
    profileImg: "profile img",

    name: "Erick",
    lastName: "Martinez",
    neighborhood: "Los caracoles",
    lastMeet: "1 Febrero 2023",
    purchasedServices: [],
    purchasedProducts: []
  },
  {
    id: 4,
    profileImg: "profile img",

    name: "Manuel",
    lastName: "Palomino",
    neighborhood: "San Fernando",
    lastMeet: "15 julio 2023",
    purchasedServices: [],
    purchasedProducts: []
  },
  {
    id: 6,
    profileImg: "profile img",

    name: "Dana",
    lastName: "Palomino",
    neighborhood: "San Fernando",
    lastMeet: "13 julio 2023",
    purchasedServices: [],
    purchasedProducts: []
  },
  {
    id: 7,
    profileImg: "profile img",

    name: "Mari Sol",
    lastName: "Palomino",
    neighborhood: "San Fernando",
    lastMeet: "06 Mayo 2024",
    purchasedServices: [],
    purchasedProducts: []
  },
  {
    id: 8,
    profileImg: "profile img",

    name: "Mari Jose",
    lastName: "Palomino",
    neighborhood: "San Fernando",
    lastMeet: "27 Enero 2024",
    purchasedServices: [],
    purchasedProducts: []
  }
];
constructor() { }
/**
 * Here i created a method to get all the 
 * clients that exists and i will return 
 * an array of them
 */
getClients(): Client[] {
  return this.ClientList;
}

getClientById(id: Number): Client | undefined {
  return this.ClientList.find(
    client => client.id === id
  );

}

}
