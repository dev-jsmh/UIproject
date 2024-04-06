import { NeighborhoodModel } from "../models/neighborhood-model";
import { ServiceModel } from "../models/service-model";
import { ProductModel } from "./product-model";

export class ClientModel {

     id!: Number;
     dni!: Number;
     first_name!: String;
     secund_name!: String;
     first_lastname!: String;
     secund_lastname!: String;
     phone!: String;
     address!: String;
     neighborhood!: NeighborhoodModel;
     last_meet!: String;
     image!: String;
     purchased_services!: ServiceModel[];
     products!: ProductModel[];

    // Empty constructor
   
    // constructor with basic client contact data
    public constructor(
        
        first_name: String,
        secund_name: String,
        first_lastname: String,
        secund_lastname: String,
        phone: String,
        address: String,
      

        ){
        
        this.first_name = first_name;
        this.secund_name = secund_name;
        this.first_lastname = first_lastname;
        this.secund_lastname = secund_lastname;
        this.phone = phone;
        this.address = address;
  

    }
}

