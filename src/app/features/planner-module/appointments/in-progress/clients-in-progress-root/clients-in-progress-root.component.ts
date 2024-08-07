import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clients-in-progress-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './clients-in-progress-root.component.html',
  styleUrl: './clients-in-progress-root.component.css'
})
export class ClientsInProgressRootComponent {

}
