import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {env } from '../../env';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodService {

  

  constructor(private http: HttpClient) { }

  // returns an array with all existing neighborhood 
  getAllNeighborhoods(){
    return this.http.get(`${env.ApiMainUrl }/neighborhoods`)
  }

  // returns a specific neighborhood by its id 
  getNeighborhoodById(id: Number){
    return this.http.get(`${env.ApiMainUrl }/neighborhoods/${id}`);
  }

}
