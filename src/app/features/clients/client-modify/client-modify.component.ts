// Jhonatan Samuel Martinez Hernandez
// Análisis y desarrollo de software

import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Client } from '../../../interfaces/IClient';
import { ClientService } from '../../../service/client.service';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-client-modify',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    BackButtonComponent
    
   ],
  templateUrl: './client-modify.component.html',
  styleUrl: './client-modify.component.css'
})
export class ClientModifyComponent {

  // create a fiel for store the client variable 
  client: Client | undefined;

  // defining the from to modify data
  modifyClient!: FormGroup;

  // inject dependencies inside the constructor
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router)
    {
    // get the id from the url to modify the client data
    const clientId = Number(this.route.snapshot.params['id']);

    // get the specified client with its id and assign it to the client field
    try{
      this.clientService.getClientById(clientId).subscribe(desiredClient => {
        desiredClient;

        // assign the form builder to the form group
/* Define here the a form model to modify /
 update clients information save in the data base*/
  
        this.modifyClient = this.fb.group({
          clientIdCard: [desiredClient.id],
          clientFirstName: [desiredClient.first_name],
          clientSecundtName : [desiredClient.secund_name],
          clientFirstLastName: [desiredClient.first_lastname],
          clientSecundLastName: [desiredClient.secund_lastname],
          clientPhone: [desiredClient.phone],
          clientAddress: [desiredClient.address],
          clientNeighborhood: [desiredClient.neighborhood.name]
      
        });
      })
      // prints an error message to the console
    }catch(e){
      this.modifyClient = this.fb.group({
        clientIdCard: [''],
        clientFirstName: [''],
        clientSecundtName : [''],
        clientFirstLastName: [''],
        clientSecundLastName: [''],
        clientPhone: [''],
        clientAddress: [''],
        clientNeighborhood: ['']
    
      });
      console.log("Error al optener los datos del cliente solicitado.", e)
    }
  }

// this method submit the data of the client that we collected from the form
// and sends it to client service
submitClient(){
  //this.clientService.submitClient()
    const modClient = this.modifyClient.value;
    console.log(modClient);
    
// takes to the home of clients
this.router.navigateByUrl("/clients");
}

}
