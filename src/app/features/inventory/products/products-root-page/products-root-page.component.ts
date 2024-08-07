import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products-root-page',
  standalone: true,
  imports: [ 
    RouterLink,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './products-root-page.component.html',
  styleUrl: './products-root-page.component.css'
})
export class ProductsRootPageComponent {

}
