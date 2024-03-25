import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.css'
})
export class BackButtonComponent {

}
