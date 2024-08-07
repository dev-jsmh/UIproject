/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Developer
 * Year 2024
 * May 
 */

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointments-root-page',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './appointments-root-page.component.html',
  styleUrl: './appointments-root-page.component.css'
})
export class AppointmentsRootPageComponent {

}
