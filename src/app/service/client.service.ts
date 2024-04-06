import { Injectable, } from '@angular/core';
import { Client } from '../interfaces/IClient';
import { HttpClient } from '@angular/common/http';
import { ApiMainUrl } from '../features/apiConfig';
import { Observable } from 'rxjs';
import { ClientModel } from '../models/client-model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  /*
     * i defined here an array for the clients data
     */
  private ApiMainUrl: String = "https://localhost:8080/Api/v1";

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

  getClientById(client_id: Number) {
    // make a get request to the clients enpoint with the id for specify the client we want
    return this.http.get<ClientModel>(`${ApiMainUrl}/clients/${client_id}`);

  }

  //method that uses httpClient to consume api
  getClients() {
    return this.http.get(`${ApiMainUrl}/clients`);
  }

  public postClient(newclient: ClientModel) {
    return this.http.post<ClientModel>(`${ApiMainUrl}/clients`, newclient);
  }

  deleteClient(clientId: Number) {
    this.http.delete(`${ApiMainUrl}/clients/${clientId}`);
  }


  // assing existing neighborhood to new client

  setClientNeigborhood(client_Id: Number, neighborhood_id:Number){
    this.http.put(`${ApiMainUrl}/clients/${client_Id}/assign-neighborhood/${neighborhood_id}`, null ).subscribe({
      next: (res: any) =>{
        console.log("neighborhood assing to client successfully ", res);
        
      },
      error: (error) => {
        return {"message": "Error when trying to assing neighborhood. ", "error": error};
      }
    });
  
  }

  /* sends client data to back-end passing each value 
  gather from the form that's located in create client component as arguments
  in the submitclient method. plus the id of the selected neighborhood
  
  ---*/

  submitClient( newClient: ClientModel, neighborhood_id: number) {
   
   this.postClient(newClient).subscribe({
      next: (res: ClientModel) => {
  
        console.log("New client created successfully", res);
        //  makes and http put request to the api to set neighborhood 
        // to new client and print it in console
        this.setClientNeigborhood(res.id, neighborhood_id);
        
      },
      error: (error) => {
          return {"message": "Error when trying to save new user. ", "error": error }
      }
    });

  }


}
