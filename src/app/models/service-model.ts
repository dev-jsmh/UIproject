/**
 * Jhonatan Samuel Martinez Hernandez 
 * Software Analyst and Developer
 */

// A class that represents the concept of a service 
// containing  basic information for it

export class ServiceModel {
    service_id!: Number;
    date!: String;
    description!: String;
    estimate_value!: Number;
    

    constructor() { }

    // =================== getters ===================
    public getId(): Number {
        return this.service_id;
    };

    public getDate(): String {
        return this.date;
    };

    public getDescription(): String {
        return this.description;
    };

    public getEstimate_value(): Number {
        return this.estimate_value
    };

    // =================== setters ===================
    public setDate(date: String): void {
        this.date = date
    };

    public setDescription(description: String): void {
         this.description = description;
    };

    public setEstimate_value(value: Number): void {
         this.estimate_value = value;
    };
    
}
