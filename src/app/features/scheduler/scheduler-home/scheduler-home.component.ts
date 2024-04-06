import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-scheduler-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './scheduler-home.component.html',
  styleUrl: './scheduler-home.component.css'
})
export class SchedulerHomeComponent {

}
