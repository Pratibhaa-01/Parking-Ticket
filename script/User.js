export class User{
    constructor(name, contact)
    {
        this.id = "User-" + (new Date()).getTime()
        this.name = name
        this.contact = contact
    }
}