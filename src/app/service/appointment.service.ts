import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../env';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) {
    
   }

    //method that uses httpClient to consume api
    public getAppointments() {
      return this.http.get(`${env.apiUrl}/appointments`);
    }
}
