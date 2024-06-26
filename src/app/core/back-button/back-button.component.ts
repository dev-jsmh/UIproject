import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [  ],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.css'
})
export class BackButtonComponent {

  constructor(private location: Location){}

  public goBack(): void {
    this.location.back();
  }
}
