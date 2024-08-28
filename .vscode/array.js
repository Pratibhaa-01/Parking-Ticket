
const students = [
    { Name : 'Pratibha', Age : 21, Id : 'B211202', city : 'Kota' },
    { Name : 'Tanishtha', Age : 21, Id : 'b210909', city : 'Jaipur'},
    { Name : 'Vivek', Age : 20, Id : 'b210889', city : 'Chomu Puliya'},
    { Name : 'Yuvraj', Age : 21, Id : 'b210978', city : 'Jaipur'}
]

// students.filter(student => students.city === city)      //returns array
// students.find(student => students.Name === "Shubham")      //returns object


const belongsTo = (students, city) => {
    const jaipurCity =[]
    for(let i =0; i<students.length; i++){
        if(students[i].city === 'Jaipur')
        jaipurCity.push(students[i])
    }
    return jaipurCity
}

const count = (students, Age) => {
    let v = 0
    for(let i =0; i<students.length; i++){
        if(students[i].Age > 20){
            v++
        }
    }
    return v
}

const ageOf = (students, Age) => {
    const ageIs = []
    for(let i =0; i<students.length; i++){
        if(students[i].Age > 20){
            ageIs.push(students[i])
        }
    }
    return ageIs
}

console.log(belongsTo(students))
console.log(count(students))
console.log(ageOf(students))