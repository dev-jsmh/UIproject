/**
 *  By Jhonatan Samuel Martienz Hernandez 
 * Software Analyst and Developer
 */
import { IService } from './IService';
import { INeighborhood } from './Ineighborhood';

/* This interface contains the 
structure of the json that corespond to its class
*/
export interface Client {
  id: Number,
  dni: Number,
  phone: String,
  first_name: String,
  secund_name: String,
  first_lastname: String,
  secund_lastname: String,
  address: String,
  image: String,
  last_meet: String,
  neighborhood: INeighborhood,
  purchased_services: IService[]
}