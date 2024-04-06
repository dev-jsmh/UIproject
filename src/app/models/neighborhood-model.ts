/**
 * Jhonatan Samuel Martinez Hernandez 
 * Software Analyst and Developer
 */

// A class that represents a neighborhood containing  basic information
export class NeighborhoodModel {
    id!: Number;
    name!: String;

    /*
    constructor(name: String) {
        
        this.name = name;
    }*/

    // =================== set name =================
    public setId(name: String): void {
        this.name = name
    }

    // =================== getters ==================
    public getId(): Number{
        return this.id;
    }

    public getName(): String  {
        return this.name;
    }


}
