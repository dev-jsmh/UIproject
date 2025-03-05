import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-record-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './record-root.component.html',
  styleUrl: './record-root.component.css'
})
export class RecordRootComponent {

}
