import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from '../../../../core/spinner/spinner.component';

@Component({
  selector: 'app-provider-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    SpinnerComponent
  ],
  templateUrl: './provider-dashboard.component.html',
  styleUrl: './provider-dashboard.component.css'
})
export class ProviderDashboardComponent {

  public providers = [];


}
