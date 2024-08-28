import { Pass } from "./Pass.js"

export class MonthlyPass extends Pass
{
    constructor(vehicle)
    {
        let currentDateTime = new Date()
        currentDateTime.setMonth(currentDateTime.getMonth() + 1)
        let price=0
        switch(vehicle.vehicleType)
        {
            case "cycle" :
                price = 100
                break
            case "motorcycle" :
                price = 200
                break
            case "car" :
                price = 500
                break
        }
        super(vehicle, currentDateTime, price)
        this.type = "monthly"
    }
}