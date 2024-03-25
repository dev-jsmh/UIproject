import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from '../shared/back-button/back-button.component';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [
    RouterLink,
    BackButtonComponent
  ],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {

}
