import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientModifyComponent } from './client-modify/client-modify.component';
import { ClienteModalComponent } from './shared/cliente-modal/cliente-modal.component';



export const clientRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ClientHomeComponent  },
      { path:'create', component: CreateClientComponent},
      { path:':id/modify', component: ClientModifyComponent},
      { path: ':id/details', component: ClientDetailComponent },
      {path:'client-modal', component: ClienteModalComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(clientRoutes)],
  exports: [RouterModule],
})

export class ClientRoutsModule { }
