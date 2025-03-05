import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpinnerComponent } from '../../../../core/spinner/spinner.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-record-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    SpinnerComponent
  ],
  templateUrl: './record-dashboard.component.html',
  styleUrl: './record-dashboard.component.css'
})
export class RecordDashboardComponent {

  public records = [];

}
