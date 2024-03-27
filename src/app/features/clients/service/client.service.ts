import { Injectable, } from '@angular/core';
import { Client } from './IClient';
import { HttpClient } from '@angular/common/http';
import { ApiMainUrl } from '../../apiConfig';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  /*
     * i defined here an array for the clients data
     */
  private ApiMainUrl: String = "https://localhost:8080/Api/v1";

  private ClientList: Client[] = [];

  private header = { Accept: 'application/json' };

  /*
  [
    {
      id: 1,
      profileImg: "profile img",
      name: "Dummy",
      lastName: "Client",
      phone: "1111111111",
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
      phone: "3156816116",
  
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
      phone: "2222222",
  
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
      phone: "33333333",
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
      phone: "4444444444",
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
      phone: "5555555555",
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
      phone: "1717171717",
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
      phone: "8888888888",
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
      phone: "8888888888",
      name: "Mari Jose",
      lastName: "Palomino",
      neighborhood: "San Fernando",
      lastMeet: "27 Enero 2024",
      purchasedServices: [],
      purchasedProducts: []
    }
  ];
  */

  constructor(private http: HttpClient) { }

  // ----------------------- method definition here -----------------------

  getClientById(id: Number): Client | undefined {
    return this.ClientList.find((client) => { client.id === id });
  }


  //method that uses httpClient to consume api
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${ApiMainUrl}/clients`)
  };

  /* sends client data to back-end passing each value 
  gather from the form that's located in create client component as agruments
  in the submitclient method
  */
  submitClient(
    clientFirstName: String,
    clientSecundtName: String,
    clientFirstLastname: String,
    clientSecundLastname: String,
    clientPhone: String,
    clientAddress: String,
    clientNeighborhood: String,) {
    console.log(clientFirstName);
    console.log(clientSecundtName);
    console.log(clientFirstLastname);
    console.log(clientSecundLastname);
    console.log(clientPhone);
    console.log(clientAddress);
    console.log(clientNeighborhood);


  }

}
