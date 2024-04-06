/**
 *  By Jhonatan Samuel Martienz Hernandez 
 * Software Analyst and Developer
 */

/* import the client interface that contains the 
structure of the json that corespond to its class
*/

import { Client } from './IClient'
export interface IService {
    service_id: number
    date: string
    description: string
    estimate_value: number
  }
  