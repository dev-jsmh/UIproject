import { IService } from "./IService";

/*
export const ClientModel = {

     id: String,
      dni: String,
      phone: String,
      first_name: String,
      secund_name: String,
      first_lastname: String,
      secund_lastname: String,
      address: String,
    // and relation with the neighborhood table 
      image: String, // it is the URL of the client photo profile
      last_meet: '',

     /* I use here the @JsonIgnoreProperties annotation as it allows 
    me to prevent the infinite loop that i got here becuase one-to-many 
    relationship is a bidirectional relation. it means we can obtenin 
    informacion about the related entities by querying 
    each one separately
    
     neighborhood: neighborhood,

    
// relation one client to many services
      purchased_services: IService[]
    
}*/