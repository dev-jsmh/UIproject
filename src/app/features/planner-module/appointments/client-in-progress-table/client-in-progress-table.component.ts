import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppointmentService } from '../../../../service/appointment.service'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-client-in-progress-table',
  standalone: true,
  imports: [
    RouterLink, 
    NgFor
  ],
  templateUrl: './client-in-progress-table.component.html',
  styleUrl: './client-in-progress-table.component.css'
})
export class ClientInProgressTableComponent {

  appointmentsInProgress: any = [
    {
      date: "2025-02-01",
      hour: "10:01:02",
      client: {
        names: "Jhonatan",
        neighborhood: {
          name: "Los caracoles"
        }
      }
    }
  ];


  constructor(private appointmentService: AppointmentService ){

    this.appointmentService.getAppointments().subscribe(
      {
        next: (res) => {
          this.appointmentsInProgress = res
          console.log(res);
        },
        error: (error) => {
          console.warn(error);
        }
      }
    );

  }

  

}
