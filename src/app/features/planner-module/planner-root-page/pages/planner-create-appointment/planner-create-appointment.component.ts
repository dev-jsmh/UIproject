import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ClientModel } from '../../../../../models/client-model';
import { ClientService } from '../../../../../service/client.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-planner-create-appointment',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './planner-create-appointment.component.html',
  styleUrl: './planner-create-appointment.component.css'
})
export class PlannerCreateAppointmentComponent {

  // fetch the client for create him / her a new appointment from the server
  public client: ClientModel | undefined;

  public id = this.route.snapshot.params["id"];


  appointmentForm = new FormGroup({

    "date": new FormControl(""),
    "hour": new FormControl(""),
    "description": new FormControl(""),
    "estimatedValue": new FormControl("")

  });



  constructor(private clientService: ClientService, private route: ActivatedRoute) {


    this.clientService.getClientById(this.id).subscribe({
      next: (res) => {
        this.client = res;
        console.log(res);

      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }



  createAppointment() {

    const fullname = this.client?.names + " " + this.client?.lastNames;

    let appointmentData = {

      "clientFullName": fullname,
      "phone": this.client?.phone,
      "neighborhood": this.client?.neighborhood?.name,
      "address": this.client?.address,
      ...this.appointmentForm.value

    }

    console.log(appointmentData);
  }
  get date() {
    return this.appointmentForm.get("date")?.value;
  }

  get hour() {
    return this.appointmentForm.get("hour")?.value;
  }

  get description() {
    return this.appointmentForm.get("description")?.value;
  }

  get value() {
    return this.appointmentForm.get("estimatedValue")?.value;
  }


  onSubmit() {

    this.createAppointment();
  }
}
