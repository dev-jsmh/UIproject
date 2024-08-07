import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {env } from '../../env';
import { NeighborhoodModel } from '../models/neighborhood-model';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodService {

  // array of neighborhoods 
  neighborhoods: NeighborhoodModel[] = [];

  constructor(private http: HttpClient) { 
    // make get request to neighborhood enpoint and assing them to a property
    this.getAllNeighborhoods().subscribe({
      next:(res: any ) => {
        this.neighborhoods = res;
        
      },
      error: (error) => {
        console.log("Error al optener los barrios de la base de datos. ", error);
         }
    });
  }

  // returns an array with all existing neighborhood 
  getAllNeighborhoods(){
    return this.http.get(`${env.apiUrl }/neighborhoods`)
  }

  // returns a specific neighborhood by its id 
  getNeighborhoodById(id: Number){
    return this.http.get(`${env.apiUrl }/neighborhoods/${id}`);
  }

}
