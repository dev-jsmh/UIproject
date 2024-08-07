import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-finished-appointment-root-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './finished-appointment-root-page.component.html',
  styleUrl: './finished-appointment-root-page.component.css'
})
export class FinishedAppointmentRootPageComponent {

}
