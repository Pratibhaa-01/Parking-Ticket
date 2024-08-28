export class Vehicle
{
    constructor(owner, number){
        this.owner = owner
        this.number = number
        this.id = "REG-" + (new Date()).getTime()
    }
}