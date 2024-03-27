import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientRoutsModule } from './client-routing.module';
import { RouterModule } from '@angular/router';

/**
 * import the related componets to clients
 */


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ClientDashboardComponent,
    ClientDetailComponent,
    ClientHomeComponent,
    CreateClientComponent,
    ClientRoutsModule,
    RouterModule
  ]
})
export class ClientModule { }
