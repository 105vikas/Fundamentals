// new Keyword: The new operatro let's developers create an instance of a user-defined object type that has a constructor function

//---------------- OOPs Principal: make code resusable, readable & scale 
// Encapsulation is packing of data & function into one componenet and then controll access to the component to make a blackbox out of object

// class encapsul {
//     constructor() {
//         var name = "Vikas";
//         var changeName = {
//             setter: function (newName) {
//                 name = newName;
//             },
//             getter: function () {
//                 return name;
//             }
//         }
//         return changeName;
//     }
// }
function encapsul() {
    var name = "vikas"
    var changeName = {
        getter: function () {
            return name;
        },
        setter: function (newName) {
            name = newName
        }
    }
    return changeName;
}
let capsulData = new encapsul();
console.log("Encapsulation old Name: ", capsulData.getter())
capsulData.setter("Sonu")
console.log("Encapsulation New Name: ", capsulData.getter())

// Abstraction: hide implemention only show the behaviour (set , print)
function abstract() {
    //private variable
    let userName;
    let userLastName;
    var getName = {}
    // public behaviour
    getName.setName = function (name) {
        userName = name;
    }
    getName.setLastName = function (lastName) {
        userLastName = lastName
    }
    getName.Details = function () {
        return `Abstration: , ${userName}, ${userLastName}`;
    }
    return getName;
}
const abstObj = abstract(); // new only required when you using constructor or class function
abstObj.setName("Vikas")
abstObj.setLastName("Yadav")
console.log(abstObj.Details())

// Inheritance
class Person {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name)
    }
}
class child extends Person {
    constructor(name, village) {
        super();
        this.name = name;
        this.village = village;
    }
    printDetials() {
        console.log("Inheritance Detials: ", this.name, this.village)
    }
}
const vikas = new child("Vikas", "Prayag")
// vikas.printName()
vikas.printDetials()

// polymorphism
class Car {
    createNewPerson() {
        console.log("Polymorphism Details: New person storage is created ")
    }
}
class NewCar extends Car {
    constructor(name, village) {
        super()
        this.name = name;
        this.village = village;
    }
    createNewPerson() {
        console.log("Polymorphism Details: ", this.name, this.village)
    }
}
const childrean = new NewCar("Vikas", "Prayag");
childrean.createNewPerson();
// ---------------------------------------------------------------------------------------------
// This - global, function, callback function, object, arrow 
// This refers window in global 
// This refers current object if not then window in function