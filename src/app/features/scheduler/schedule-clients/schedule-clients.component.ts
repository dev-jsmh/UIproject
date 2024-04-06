import { Component } from '@angular/core';
import { TableScheduleClientsComponent } from './components/table-schedule-clients/table-schedule-clients.component';
import { ClientSearchFormComponent } from '../shared/client-search-form/client-search-form.component'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-schedule-clients',
  standalone: true,
  imports: [
    RouterLink,
    ClientSearchFormComponent,
    TableScheduleClientsComponent
  ],
  templateUrl: './schedule-clients.component.html',
  styleUrl: './schedule-clients.component.css'
})
export class ScheduleClientsComponent {

}
