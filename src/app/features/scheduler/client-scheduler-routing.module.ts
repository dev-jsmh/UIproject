import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerHomeComponent } from './scheduler-home/scheduler-home.component';
import { AgendaComponent } from './agenda/agenda/agenda.component';
import { CalendarHomeComponent } from './calendar/calendar-home/calendar-home.component';
import { ScheduleClientsComponent } from '../scheduler/schedule-clients/schedule-clients.component'
/***
 * module 
 * assigned to managed the clients that are schedule to
 * be serve, and all the states a cliente could have when
 * he/her has schedule a service of any kind
*/

// Main and children routes are defined here 
const routes: Routes = [
  // show a page were going to be render all child views related to client scheduler module
  {
    path: '', component: SchedulerHomeComponent,
    children: [
      // show the clients view
      {
        path: 'client-list', component: ScheduleClientsComponent,
        // defined here the child route associated with this feacture
        children: [

        ]
      },
      
      // show the calendar view as the home page for this module
      {
        path: 'agenda', component: AgendaComponent,
        // defined here the child route associated with this feacture
        children: [

        ]
      },
      
      // show the agenda view 
      {
        path: 'calendar', component: CalendarHomeComponent,
        // defined here the child route associated with this feacture
        children: [

        ]
      },
      {// redirect to the client component in case there 
        //is no route defined
        path: '', redirectTo: 'client-list', pathMatch: 'full'}

    ]
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSchedulerRoutingModule { }
