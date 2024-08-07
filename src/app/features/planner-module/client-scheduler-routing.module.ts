/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Developer
 * Year 2024
 * May 
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarHomeComponent } from './calendar/calendar-home/calendar-home.component';
import { ClientsInProgressRootComponent } from './appointments/in-progress/clients-in-progress-root/clients-in-progress-root.component';
import { PlannerClientTableComponent } from './planner-root-page/pages/planner-client-table/planner-client-table.component';
import { PlannerRootPageComponent } from './planner-root-page/planner-root-page.component';
import { AppointmentsRootPageComponent } from './appointments/appointments-root-page/appointments-root-page.component';
import { ClientInProgressTableComponent } from './appointments/in-progress/client-in-progress-table/client-in-progress-table.component';
import { PlannerCreateAppointmentComponent } from './planner-root-page/pages/planner-create-appointment/planner-create-appointment.component';
import { TableFinishedAppointmentsComponent } from './appointments/finished-clients/table-finished-appointments/table-finished-appointments.component';
import { AppointmentModifyComponent } from './appointments/appointment-modify/appointment-modify.component';
import { AppointmentDetailsComponent } from './appointments/appointment-details/appointment-details.component';
import { CreateAppointmentInvoiceComponent } from './appointments/create-appointment-invoice/create-appointment-invoice.component';
import { FinishedAppointmentRootPageComponent } from './appointments/finished-clients/finished-appointment-root-page/finished-appointment-root-page.component';

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
    // main route: localhost://planner/
    path: '', component: PlannerRootPageComponent,
    children: [
      // show a table with all clients so we can create a new appointment a a desired one 
      {
        path: 'client-list', component: PlannerClientTableComponent
      },
      { // ============== appointments routes ==============
        // route: planner/appointments/
        path: 'appointments', component: AppointmentsRootPageComponent,
        // defined here the child route associated with this feacture
        children: [
          {
            path: 'in-progress', component: ClientsInProgressRootComponent,
            children: [
              // the first page we see when entering to checke the appointments that are in progress
              { path: "", component: ClientInProgressTableComponent },
              { path: ":id/details", component: AppointmentDetailsComponent }
            ]
          },
          {
            path: 'finished', component: FinishedAppointmentRootPageComponent,
            children: [
              { path: '', component: TableFinishedAppointmentsComponent },
              { path: ':id/details', component: AppointmentDetailsComponent },
            ]
          },
        ]
        // ============== appointments routes ==============
      },
      { // ============== calendar routes ==============
        // show the agenda view 
        path: 'calendar', component: CalendarHomeComponent,
        // defined here the child route associated with this feacture
        children: [

        ]
      },
      {// redirect to the client component in case there 
        //is no route defined
        path: '', redirectTo: 'client-list', pathMatch: 'full'
      }

    ]
  },
  { path: 'client-list/:id/create-appointment', component: PlannerCreateAppointmentComponent },
  { path: 'appointments/finished/:id/create-invoice', component: CreateAppointmentInvoiceComponent },
  { path: "appointments/in-progress/:id/modify", component: AppointmentModifyComponent },
 
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSchedulerRoutingModule { }
/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Developer
 * Year 2024
 * May 
 */