import { NeighborhoodModel } from "../models/neighborhood-model";
import { ServiceModel } from "../models/service-model";
import { ProductModel } from "./product-model";

export class ClientModel {

     id!: Number;
     dni!: Number;
     names!: String;
     lastNames!: String;
     phone!: String;
     address!: String;
     neighborhood!: NeighborhoodModel;
     lastMaintenance!: String;
     nextMaintenance!: String;
     hasBeenServed!: Boolean;
     image!: String;
     purchased_services!: ServiceModel[];
     products!: ProductModel[];

}

