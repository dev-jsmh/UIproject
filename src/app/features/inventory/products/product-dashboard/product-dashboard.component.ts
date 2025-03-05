import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '../../../../core/spinner/spinner.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    NgIf,
    SpinnerComponent

  ],
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.css'
})
export class ProductDashboardComponent {

  public products = [];
}
