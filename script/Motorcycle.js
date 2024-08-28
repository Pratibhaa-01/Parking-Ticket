import { Vehicle } from "./Vehicle.js"

export class Motorycle extends Vehicle
{
    constructor(owner, number)
    {
        super(owner, number)
        this.vehicleType = "motorcycle"
    }
}