import { Vehicle } from "./Vehicle.js"

export class Car extends Vehicle
{
    constructor(owner, number)
    {
        super(owner, number)
        this.vehicleType = "car"
    }
}