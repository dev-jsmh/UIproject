import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientModel } from '../models/client-model';
// ==== api url ====
import { env  } from '../../env';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // A list of all clients that exist
  public clients: ClientModel[] = [];
  public clientTestCollection: any[] = [
    {
      "id": 1,
      "dni": 1,
      "phone": "7777777",
      "names": "Jhonatan Samuel",
      "lastNames": "Martinez Hernandez",
      "address": "calle 23 #00",
      "image": "",
      "lastMaintenance": undefined,
      "nextMaintenance": "2025-03-19",
      "hasBeenServed": false,
      "neighborhood": {
        "id": 1,
        "name": "Blas de lezo"
      },
      "purchased_services": []
    },
    {
      "id": 2,
      "dni": 435234,
      "phone": "na",
      "names": "Luisa",
      "lastNames": "Hernandez",
      "address": "na",
      "image": "na",
      "lastMaintenance": "2024-01-04",
      "nextMaintenance": "2025-03-13",
      "hasBeenServed": false,
      "neighborhood": {
        "id": 1,
        "name": "Blas de lezo"
      },
      "purchased_services": []
    },
    {
      "id": 3,
      "dni": 39403,
      "phone": "na",
      "names": "Jose",
      "lastNames": "Gutierres",
      "address": "na",
      "image": "na",
      "lastMaintenance": "2025-02-03",
      "nextMaintenance": "2025-05-03",
      "hasBeenServed": false,
      "neighborhood": {
        "id": 1,
        "name": "Blas de lezo"
      },
      "purchased_services": [],
      "products": []
    },
    {
      "id": 4,
      "dni": 5456,
      "phone": "na",
      "names": "Andres",
      "lastNames": "Correa",
      "address": "na",
      "image": "na",
      "lastMaintenance": "2025-02-03",
      "nextMaintenance": "2025-07-03",
      "hasBeenServed": true,
      "neighborhood": {
        "id": 1,
        "name": "Blas de lezo"
      },
      "purchased_services": []
    },
    {
      "id": 5,
      "dni": 344645,
      "phone": "323453543",
      "names": "Isabela",
      "lastNames": "Gutierrez",
      "address": "calle 23",
      "image": undefined,
      "lastMaintenance": "2025-03-08",
      "nextMaintenance": undefined,
      "hasBeenServed": false,
      "neighborhood": {
        "id": 1,
        "name": "Blas de lezo"
      },
      "purchased_services": []
    }
]

  constructor(private http: HttpClient) {

    this.getClients().subscribe({
      next: (res: any) => {
        this.clients = res;
      },
      error: (error) => {
        console.log("Error when client service was trying to get the users from server. ", error);
      }
    })

  }

  // ----------------------- method definition here -----------------------

  getClientById(client_id: Number) {
    // make a get request to the clients enpoint with the id for specify the client we want
    return this.http.get<ClientModel>(`${env.apiUrl }/clients/${client_id}`);

  }

  //method that uses httpClient to consume api
  public getClients() {
    return this.http.get(`${env.apiUrl}/clients`);
  }

  public postClient(newclient: ClientModel) {
    return this.http.post<ClientModel>(`${env.apiUrl}/clients`, newclient);
  }

  public deleteClient(clientId: Number) {
    return this.http.delete(`${env.apiUrl}/clients/${clientId}`);
  }

  public putClient(modClient: ClientModel, clientId: Number) {
    return this.http.put<ClientModel>(`${env.apiUrl}/clients/${clientId}`, modClient);
  }

  // assing existing neighborhood to new client

  public setClientNeigborhood(client_Id: Number, neighborhood_id: Number) {
    this.http.put(`${env.apiUrl}/clients/${client_Id}/assign-neighborhood/${neighborhood_id}`, null).subscribe({
      next: (res: any) => {
        console.log("neighborhood assing to client successfully ", res);

      },
      error: (error) => {
        return { "message": "Error when trying to assing neighborhood. ", "error": error };
      }
    });

  }

  /* sends client data to back-end passing each value 
  gather from the form that's located in create client component as arguments
  in the submitclient method. plus the id of the selected neighborhood
  
  ---*/

  public createClient(newClient: any , neighborhood_id: number) {

    this.postClient(newClient).subscribe({
      next: (res: ClientModel) => {

        console.log("New client created successfully", res);
        //  makes and http put request to the api to set neighborhood 
        // to new client and print it in console
        this.setClientNeigborhood(res.id, neighborhood_id);

      },
      error: (error) => {
        console.log("Error when creating user in the data base. There, is probably no connection to the server. ")
      }
    });

  }

  // ===========================  Modify existing client's data =============================
  public modifyClient(modClient: any, clientId: Number, neighborhood_id: number) {
    this.putClient(modClient,clientId).subscribe(
      {
        next: (res: any) => {

          // assign new neighborhood to client or left the the selected one by default
          this.setClientNeigborhood(res.id, neighborhood_id);

          console.log(res)
        },
        error: (error) => {
          console.log(error)
         }
      }
    );
  }


}
