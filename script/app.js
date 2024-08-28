import { Student } from "./Student.js"
import { Faculty } from "./faculty.js"
import { Cycle } from "./Cycle.js"
import { Motorycle } from "./Motorcycle.js"
import { Car } from "./Car.js"
import { DailyPass } from "./DailyPass.js"
import { MonthlyPass } from "./MonthlyPass.js"
import { YearlyPass } from "./YearlyPass.js"

const users = []
const vehicles = []
const passes = []

document.addEventListener("DOMContentLoaded", ()=>{
    let userSubmitBtn = document.getElementById("userSubmitBtn")
    userSubmitBtn.addEventListener("click", registerUser)
    let vehicleSubmitBtn = document.getElementById("vehicleSubmitBtn")
    vehicleSubmitBtn.addEventListener('click', registerVehicle)
    
})

const registerUser = (e) => {
    e.preventDefault()
    let userName = document.getElementById('userName').value
    let userContact = document.getElementById('userContact').value
    let userRole = document.getElementById('userRole').value
    let user = null
    switch(userRole){
        case 'student' :
            user = new Student(userName, userContact)
            break;
        case 'faculty' :
            user = new Faculty(userName, userContact)
            break;
    }
    users.push(user)
    console.log(users)
}

const registerVehicle = (e) => {
    e.preventDefault()
    let number = document.getElementById('number').value
    let vehicleType = document.getElementById('vehicleType').value
    let owner = (users[users.length - 1])
    let type = null
    switch(vehicleType){
        case 'cycle' :
            type = new Cycle(owner, number)
            break;
        case 'motorcycle' :
            type = new Motorycle(owner, number)
            break;
        case 'car' :
            type = new Car(owner, number)
            break;
    }
    vehicles.push(type)
    console.log(vehicles)
    showPassChoice(type)
}

const showPassChoice = (type) => {
    let dailyPass = new DailyPass(type)
    let montlyPass = new MonthlyPass(type)
    let yearlyPass = new YearlyPass(type)

    let passChoice = document.getElementById('passChoice')
    let dailybutton = document.createElement("INPUT")
    dailybutton.setAttribute('type', "button")
    dailybutton.value = "Daily : " + dailyPass.price
    dailybutton.addEventListener('click', () => {
        passes.push(dailyPass)
        dailyPass.print()
    })
    passChoice.appendChild(dailybutton)

    let monthlybutton = document.createElement("INPUT")
    monthlybutton.setAttribute('type', "button")        //element.attribute , set.attribute(attribute, value) => Change the attribute value of an HTML element
    monthlybutton.value = "Monthly : " + montlyPass.price
    monthlybutton.addEventListener('click', () => {
        passes.push(montlyPass)
        montlyPass.print()
    })
    passChoice.appendChild(monthlybutton)

    let yearlybutton = document.createElement("INPUT")
    yearlybutton.setAttribute('type', "button")
    yearlybutton.value = "Yearly : " + yearlyPass.price
    yearlybutton.addEventListener('click', () => {
        passes.push(yearlyPass)
        yearlyPass.print()
    })
    passChoice.appendChild(yearlybutton)

}