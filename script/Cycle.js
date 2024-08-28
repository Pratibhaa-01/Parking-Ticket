import { Vehicle } from "./Vehicle.js"

export class Cycle extends Vehicle
{
    constructor(owner, number)
    {
        super(owner, number)
        this.vehicleType = "cycle"
    }
}