import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-provider-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './provider-root.component.html',
  styleUrl: './provider-root.component.css'
})
export class ProviderRootComponent {

}
