/*

Jhonatan Samuel Martinez Hernandez
Analisis y Desarrollo de Software
Año 2024

*/

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inventory-root-page',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './inventory-root-page.component.html',
  styleUrl: './inventory-root-page.component.css'
})
export class InventoryRootPageComponent {

}
