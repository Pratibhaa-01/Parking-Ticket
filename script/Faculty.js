import { User } from "./User.js"

export class Faculty extends User
{
    constructor(name, contact)
    {   
        super(name,contact)
        this.role = "faculty"
        
    }
}