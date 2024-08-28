import { Pass } from "./Pass.js"

export class DailyPass extends Pass
{
    constructor(vehicle)
    {
        let currentDateTime = new Date()
        currentDateTime.setDate(currentDateTime.getDate() + 1)
        
        let price=0
        switch(vehicle.vehicleType)
        {
            case "cycle" :
                price = 5
                break
            case "motorcycle" :
                price = 10
                break
            case "car" :
                price = 50
                break
        }
        super(vehicle, currentDateTime, price)
        this.type = "daily"
    }
}