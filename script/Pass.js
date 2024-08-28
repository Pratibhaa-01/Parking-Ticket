export class Pass
{
    constructor(vehicle, expiry, price)
    {
        this.id = "Pass-" + (new Date).getTime()
        this.vehicle = vehicle
        this.expiry = expiry
        this.price = price
    }

    print(){
        let passToBePrint = 
        `
        <div>
            <h2>PASS</h2>
            <label><b>Pass Id :</b></label>
            <label>${this.id}</label>
        </div>
        <div>
            <label><b>Vehicle Id :</b></label>
            <label>${this.vehicle.id}</label>
        </div>
        <div>
            <label><b>Registration No. :</b></label>
            <label>${this.vehicle.number}</label>
        </div>
        <div>
            <label><b>Owner Name:</b></label>
            <label>${this.vehicle.owner.name}</label>
        </div>
        <div>
            <label><b>Expiry Date :</b></label>
            <label>${this.expiry}</label>
        </div>
        `

        let ticket = document.getElementById('ticket')
        ticket.innerHTML = passToBePrint        //innerHTML => this is a property that returns the text content of the element, including all spacing and inner HTML tags.
    }
}