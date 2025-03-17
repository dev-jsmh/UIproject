import { NeighborhoodModel } from "../models/neighborhood-model";
import { ServiceModel } from "../models/service-model";
import { ProductModel } from "./product-model";

export class ClientModel {

     id!: number;
     dni!: number;
     names!: string;
     lastNames!: string;
     phone!: string;
     address!: string;
     neighborhood?: NeighborhoodModel;
     lastMaintenance?: string = undefined;
     nextMaintenance?: string = undefined;
     hasBeenServed: boolean = false;
     image?: string = undefined;
     purchased_services: ServiceModel[] = [];
     products?: ProductModel[];

}

