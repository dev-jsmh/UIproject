/**
 * Jhonatan Samuel Martinez Hernandez
 * Software Analyst and Developer
 * Year 2024
 * May 
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarHomeComponent } from './calendar/calendar-home/calendar-home.component';
import { ClientInProgressTableComponent } from './appointments/client-in-progress-table/client-in-progress-table.component';
import { AppointmentModifyComponent } from './appointments/appointment-modify/appointment-modify.component';
import { AppointmentDetailsComponent } from './appointments/appointment-details/appointment-details.component';
import { CreateAppointmentInvoiceComponent } from './appointments/create-appointment-invoice/create-appointment-invoice.component';
import { PlannerRootPageComponent } from './planner/planner-root-page/planner-root-page.component';
import { PlannerCreateAppointmentComponent } from './planner/planner-create-appointment/planner-create-appointment.component';
import { PlannerClientTableComponent } from './planner/planner-client-table/planner-client-table.component';

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
      { path: 'client-list', component: PlannerClientTableComponent },
      { path: 'client-list/:id/create-appointment', component: PlannerCreateAppointmentComponent },
      { // ============== appointments routes ==============
        // route: planner/appointments/
        path: 'appointments',
        // defined here the child route associated with this feacture
        children: [
          // the first page we see when entering to checke the appointments that are in progress
          { path: '', component: ClientInProgressTableComponent },
          { path: ':id/details', component: AppointmentDetailsComponent },
          { path: ":id/modify", component: AppointmentModifyComponent },
          { path: ':id/create-invoice', component: CreateAppointmentInvoiceComponent },
        ]
        // ============== appointments routes ==============
      },
      { // ============== calendar routes ==============
        // show the agenda view 
        path: 'calendar', component: CalendarHomeComponent },
      {// redirect to the client component in case there 
        //is no route defined
        path: '', redirectTo: 'client-list', pathMatch: 'full'
      }

    ]
  },

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