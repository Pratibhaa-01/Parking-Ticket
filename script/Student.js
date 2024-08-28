import { User } from "./User.js"

export class Student extends User
{
    constructor(name, contact)
    {   
        super(name, contact)
        this.role = "Student"
    }
}