import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cliente-modal',
  standalone: true,
  imports: [],
  templateUrl: './cliente-modal.component.html',
  styleUrl: './cliente-modal.component.css'
})
export class ClienteModalComponent {

  @Input() title: String = '';
  
  @Input() message: String = '';


}
