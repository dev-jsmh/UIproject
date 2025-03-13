import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from '../planner-module/clients/shared/back-button/back-button.component';


@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterLink,
    BackButtonComponent
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
