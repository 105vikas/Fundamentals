// // console.log("start")
// //Types of Variables [var, let and const]

// // ----- Execution Context - [ Memory & code Exicution]
// // Block or Global
// // let, const - Script memory
// // let, const - block memory
// // var,function - global memory
// // Function - Local memory

// // Immediately Invoked Function Expression - is an method in which a JavaScript function runs as soon as it is defined. It is also known as a self-executing 
// (async () => {
//     console.log("IIFE")
// })()
// // Arrow Function - 

// // Function Declaration/Statement - creates a binding of new function to a given name
// function areaOfSquare(width, height) {
//     return width * height;
// }
// console.log(areaOfSquare(5, 5), "Fun Statement");

// // Function Expression - the function keyword can be used to define a function inside an expression
// const areaSquare = function (width, height) {
//     return width * height;
// }
// console.log(areaSquare(5, 5), "Fun Expression")

// // Callback Function -  the function that we pass as an argument to another function 
// function say() {
//     return "Callback Function"
// }
// function greating(callback) {
//     return callback()
// }
// console.log(greating(say))


// // High oder Function : a function that return a function or takes other function as arguments 
// function sayHello() {
//     const high = () => {
//         console.log("High oder Function");
//     };
//     return high();
// }
// sayHello();

// // Hosting - it refer to the process whereby the interpreter appears to move the declaration of func, variable, class & import to the top of their scope, prior to execution of the code

// // Temporal Dead Zone is specific period in exicution of Javascript code where variable let & const exit but can not be assigned any value.

// // Scope, Scope chaning - it is cureent context of execuiton in which value & expression are visible or can be referenced, Scopes can also be layered in hierachy so that child scope have access the parent scope but not vice versa.
// // Block, Function scope
// // Global scope: the default scope for all code runing in script mode
// // function scope: the scope created with a function
// // Block scope: the scope create with a pair of curly braces

// // Lexical Enviroment is data structure that store all the variables & function defined in the current scope along with the refernce to all outer scope.

// // Legal & illegal shadowing like we redeclare the var with let it is legal but when redeclaring the let with var it is illegal

// // Call by value: when function is call the value of argument is copy into a new memory location for function paremeter
// let ab = 10;
// console.log("Call by value1: ", ab);
// function b(c) {
//     c = 20;
//     console.log("change value: ", c)
// }
// b(ab);
// console.log("Call by value2: ", ab);

// // call by reference - when an object/array passed to function, a copy of the reference to that object is passed. modifing the inside function afect the real object.
// let obj = { value: 10 }
// function changeValue(obj) {
//     obj.value = 20
// }
// console.log("call by value1: ", obj)
// changeValue(obj)
// console.log("call by value2: ", obj)

// // shallow copy of an object is a copy whose property share the same refernce as those of the source object from which the copy was made. as result when you change any object cause other object to change too.
// // (Re-assigning top-level properties of the copy does not affect the source object.)
// //1.
// // let shallow = ["object1", { obj2: "Object1" }]
// // shallowCopy = [...shallow];
// // // shallowCopy = Array.from(shallow)
// // shallowCopy[0] = "object2"
// // shallowCopy[1].obj2 = "object2"
// //2.
// let shallow = { obj: "object1", obj1: { obj2: "Object1" } }
// // shallowCopy = { ...shallow };
// shallowCopy = Object.assign(shallow)
// shallowCopy.obj = "object2"
// shallowCopy.obj1.obj2 = "object2"

// console.log("shallow: ", shallow) // also change because of shallow copy
// console.log("shallow copy: ", shallowCopy)

// // Deep Copy (Recursion)
// let deep = { obj1: "Object1", obj2: { obj3: "Object1" } }
// let deepCopy = JSON.parse(JSON.stringify(deep))
// deepCopy.obj1 = "object2";
// deepCopy.obj2.obj3 = "Object2"
// console.log("Deep: ", deep)
// console.log("DeepCopy: ", deepCopy)

// // Critical Rendering Path -> ( DOM -> CSSDOM -> Render_Tree -> Layout process -> Painting )

// // Async - for script if async attribute is present then the classic script will be fetched in parallel to parsing & evaluated as soon as it is available
// // <script async src"script.js"></script> - By default async, call js & imidate js downloaded

// // Defer - This boolean attribute is set to indicate to a brower that the script is ment to be executed after the document has been parsed but before firing the DOM content loading event.
// // <script defer src"script.js"></script> - Calling js while Html is exicuting & after Html exicution complete it exicute js

// // Render Blocking refers to any part of the prcess of loading a website that blocks the rendering of user interface, It is bad for web performance because it increses the lenth of time until user can interact with the site ex view content
// // most common cause are due to initially loaded of CSS or JavaScript files

// // Parser Blocking is componet of web browser that block the parsing of HTML until the JavaScript is executed

// // Reflow - it happen when browser recalculates the position & geometry of certain part of a webpage such as an update on interactive site it is repainting/redraws the webpage to show the reulting visual updates.


// let a = [10, 20, 30, 40, 50]
// // Map polyfills 
// const normalMap = a.map((curr, i) => {
//     return curr * 2;
// })
// console.log(normalMap, "Normal Map")

// Array.prototype.myMap = function (callbackFn) {
//     let inArray = this;
//     let outputArray = []
//     for (let i = 0; i < inArray.length; i++) {
//         outputArray[i] = callbackFn(this[i])
//     }
//     return outputArray;
// }
// const polyMap = a.myMap((curr) => {
//     return curr * 2;
// })
// console.log(polyMap, "Polyfilss Map")

// // ForEach polyfills

// a.forEach((curr, i, arr) => {
//     curr + 2;
// });
// console.log(a, "Normal ForEach")

// Array.prototype.myForEach = function (callbackFn) {
//     console.log(this)
//     for (let i = 0; i < this.length; i++) {
//         console.log(this[i])
//         console.log(callbackFn(this[i]))
//     }
// }
// a.myForEach((curr) => {
//     curr + 5;
// })

// // Prototype is mechanism by which javascript object inherit feature from one another, Every object in JavaScript has a build -in property which is call prototype

// // Prototype Chaining - As prototype is iteself an object, so the prototype will have it's own prototype make what's called a prototype chain

// // __proto__ & Prototype
// console.log(Object.__proto__, "Prototype")

// // Function Constructor creates function object. Calling the constructor directly can create functions dynamically, but suffers from security & similar performance issue
// const sum = new Function("a", "b", "return a+b");
// console.log("Function Constructor: ", sum(2, 6))

// // Class Constructor: constructor method is a special method of a class for creating and insitializing an object instance of that class
// class constClass {
//     constructor() {
//         this.name = "Class Constructor"
//         console.log("Constructor class")
//     }
// }
// const classConst = new constClass();
// console.log(classConst.name)

// // new Keyword: The new operatro let's developers create an instance of a user-defined object type that has a constructor function

// //---------------- OOPs Principal: make code resusable, readable & scale 
// // Encapsulation is packing of data & function into one componenet and then controll access to the component to make a blackbox out of object

// // class encapsul {
// //     constructor() {
// //         var name = "Vikas";
// //         var changeName = {
// //             setter: function (newName) {
// //                 name = newName;
// //             },
// //             getter: function () {
// //                 return name;
// //             }
// //         }
// //         return changeName;
// //     }
// // }
// function encapsul() {
//     var name = "vikas"
//     var changeName = {
//         getter: function () {
//             return name;
//         },
//         setter: function (newName) {
//             name = newName
//         }
//     }
//     return changeName;
// }
// let capsulData = new encapsul();
// console.log("Encapsulation old Name: ", capsulData.getter())
// capsulData.setter("Sonu")
// console.log("Encapsulation New Name: ", capsulData.getter())

// // Abstraction: hide implemention only show the behaviour (set , print)
// function abstract() {
//     //private variable
//     let userName;
//     let userLastName;
//     var getName = {}
//     // public behaviour
//     getName.setName = function (name) {
//         userName = name;
//     }
//     getName.setLastName = function (lastName) {
//         userLastName = lastName
//     }
//     getName.Details = function () {
//         return `Abstration: , ${userName}, ${userLastName}`;
//     }
//     return getName;
// }
// const abstObj = abstract(); // new only required when you using constructor or class function
// abstObj.setName("Vikas")
// abstObj.setLastName("Yadav")
// console.log(abstObj.Details())

// // Inheritance
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     printName() {
//         console.log(this.name)
//     }
// }
// class child extends Person {
//     constructor(name, village) {
//         super();
//         this.name = name;
//         this.village = village;
//     }
//     printDetials() {
//         console.log("Inheritance Detials: ", this.name, this.village)
//     }
// }
// const vikas = new child("Vikas", "Prayag")
// // vikas.printName()
// vikas.printDetials()

// // polymorphism
// class Car {
//     createNewPerson() {
//         console.log("Polymorphism Details: New person storage is created ")
//     }
// }
// class NewCar extends Car {
//     constructor(name, village) {
//         super()
//         this.name = name;
//         this.village = village;
//     }
//     createNewPerson() {
//         console.log("Polymorphism Details: ", this.name, this.village)
//     }
// }
// const childrean = new NewCar("Vikas", "Prayag");
// childrean.createNewPerson();
// // ---------------------------------------------------------------------------------------------
// // This - global, function, callback function, object, arrow 
// // This refers window in global 
// // This refers current object if not then window in function

// // Call, Apply, Bind
// let village = {
//     name: "Prayag",
//     type: "rural"
// }
// let secondVillage = {
//     name: "Delhi",
//     type: "metro city"
// }
// printDetils = function (typeOfFun) {
//     console.log(`${typeOfFun}: ${this.name} ${this.type}`)
// }
// printDetils.call(village, "Call Function")
// printDetils.apply(village, ["Apply Function"])
// const bindDetails = printDetils.bind(village, "Bind")
// bindDetails()

// // Event Delegagtion is techniques in javaScript where a parent element handles event for it's child elements even if the children are added dynamically after the page loads.
// // document.getElementById("parent").addEventListener('click', function (event) {
// //     if (event.target.matches('.child')) {
// //         console.log("click children: ", event.target.textContent)
// //     }
// // },false)

// // Event Bubling/ Capturing
// // Event Bubling - click on child -> click parent -> click grandParent 
// // Event Capturing/Trickling - click on child -> click grandParent  -> click parent
// // ex:
// // document.querySelector("#parent").addEventListener('click', (e) => {
// //     console.log("Parent click")
// // }, false)
// //  useCapturing-> true/false

// // Closure is the combination of a functioin bundled together with references to it's surrounding state, it means closure gives a function access to it's outer scope. closures creates every time when a function created
// function closure() {
//     let variable = "Vikas";
//     function preClosure() {
//         return variable;
//     }
//     return preClosure();
// }
// console.log(closure());

// // Currying 
// function button(color) {
//     function buttonType(type) {
//         function buttonClick(onClick) {
//             return [color, type, onClick]
//         }
//         return buttonClick
//     }
//     return buttonType;
// }
// const buttonColor1 = button("Red")
// const buttonColor2 = button("Green")

// const buttonType1 = buttonColor1("Normal")
// const buttonType2 = buttonColor2("boldButton")

// const buttonOnClick1 = buttonType1("clickOnPress")
// const buttonOnClick2 = buttonType1("clickOnClick")

// console.log("Currying1: ", buttonOnClick1)
// console.log("Currying2: ", buttonOnClick2)

// // // Fibonacci - 0 1 1 2 3 5
// function fibona(n) {
//     if (n < 0) return "False"
//     if (n === 0 || n === 1) return 1;
//     return fibona(n - 1) + fibona(n - 2)
// }
// console.log(fibona(9))

// // Factorial using curring - 5*4*3*2*1
// function factorial(n) {
//     if (n < 0) return "False"
//     if (n === 0 || n === 1) return 1
//     return n * factorial(n - 1)
// }
// console.log(factorial(5));



// let array = [10, 20, 30, 40, 50, " "]
// // My map
// let mapArray = array.map((item) => item * 2)
// console.log("Map prototype: ", mapArray)

// Array.prototype.myMap = function (callbackFn) {
//     let inputArray = this;
//     let outputArray = [];
//     for (let i = 0; i < inputArray.length; i++) {
//         outputArray[i] = callbackFn(this[i])
//     }
//     return outputArray;
// }

// let myMapArray = array.myMap((item) => item * 3)
// console.log("Mymap prototype: ", myMapArray)

// //ForEach
// array.forEach((item) => {
//     console.log(item * 2)
// })

// Array.prototype.myForEach = function (callbackFn) {
//     let inputArray = this;
//     for (let i = 0; i < inputArray.length; i++) {
//         inputArray[i] = callbackFn(this[i])
//     }
//     return inputArray;
// }
// let arr = [];
// array.myForEach((item) => {
//     arr.push(item * 1)
// })
// console.log(arr)

// // My Index of
// console.log(array.indexOf(30))

// Array.prototype.myIndexOf = function (item) {
//     let inputArray = this;
//     var outputIndex = -1;
//     for (let i = 0; i < inputArray.length; i++) {
//         if (item === inputArray[i]) {
//             outputIndex = i;
//         }
//     }
//     return outputIndex
// }
// console.log(array.myIndexOf(" "))

// // myReduce

// const reducedValue = array.reduce((accumulator, currenValue) => currenValue + accumulator, 0)
// console.log("Reduced Valuse: ", reducedValue)
// Array.prototype.myReduce = function (callbackFn) {
//     let outPutValue = 0;
//     for (let i = 0; i < this.length; i++) {
//         outPutValue = callbackFn(this[i], outPutValue)
//     }
//     return outPutValue
// }
// const myReduceValue = array.myReduce((accumulator, currenValue) => currenValue + accumulator, 0)
// console.log("My Reduce Value: ", myReduceValue)

// // myEvery
// let everyValue = array.every((item) => item / 10)
// console.log("Every Value: ", everyValue)
// Array.prototype.myEvery = function (callbackFn) {
//     let outputValue = true;
//     for (let i = 0; i < this.length; i++) {
//         if (!callbackFn(this[i])) {
//             return false
//         }
//     }
//     return outputValue;
// }
// let myEveryValue = array.myEvery(item => item / 10)
// console.log("My Every Value: ", myEveryValue)

// // mySome
// let someValue = array.some((item) => item <= 10)
// console.log("Some value: ", someValue)
// Array.prototype.mySome = function (callbackFn) {
//     let outPutValue = false
//     for (let i = 0; i < this.length; i++) {
//         if (callbackFn(this[i])) {
//             return true
//         }
//     }
//     return outPutValue
// }
// let mySomeValue = array.mySome((item) => item <= 10)
// console.log("My some Value: ", mySomeValue)


// // Find - return first value that trigure if not any value trigger then return undefine
// let findValue = array.find(item => item > 20)
// console.log("Find Value", findValue)
// Array.prototype.myFind = function (callbackFn) {
//     let outputValue;
//     for (let i = 0; i < this.length; i++) {
//         if (callbackFn(this[i])) {
//             return this[i]
//         }
//     }
//     return outputValue;
// }
// let myFindValue = array.myFind(item => item > 20)
// console.log("My Find Value", myFindValue)


// // ------------------------------------------------------------ myFlat
// let arrValue = [10, 20, 30, [40, 50, [60, 70]]]
// let flatValue = arrValue.flat(4)
// console.log("Flat Value: ", flatValue)

// Array.prototype.myFlat = function (value) {
//     const flatValue = (arr, depth) => {
//         return depth > 0
//             ? arr.reduce((acc, val) => {
//                 return acc.concat(Array.isArray(val) ? flatValue(val, depth - 1) : val)
//             }, []) : arr.slice();
//     }
//     return flatValue(this, value)
// }
// let myFlatValue = arrValue.myFlat(2)
// console.log("My Flat Value: ", myFlatValue)


// // myConcat
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10, 11]
// const concatValue = arr1.concat(arr2)
// console.log("Concate value: ", concatValue)
// Array.prototype.myConcat = function (inputArray) {
//     let inputArraySecond = inputArray
//     let outputArray = this;
//     for (let i = 0; i < inputArraySecond.length; i++) {
//         outputArray.push(inputArraySecond[i])
//     }
//     return outputArray;
// }
// const myConcatValue = arr1.myConcat(arr2)
// console.log("My Concate Value: ", myConcatValue)


// // call, apply and bind
// function Person(name, address) {
//     this.name = name;
//     this.address = address
// }
// let details = function (id) {
//     console.log(this)
//     return `Person ${id} ${this.name} ${this.address}`;
// }
// // ----------- Call
// console.log("Call Value: ", details.call(new Person("Vikas", "prayag"), 123))
// Function.prototype.myCall = function (context, ...args) {
//     context.fn = this;
//     return context.fn(...args);
// }
// console.log("My Call Value: ", details.myCall(new Person("Vikas", "prayag"), 123))

// // ------------ Apply
// console.log("Apply Value: ", details.apply(new Person("Vikas", "prayag"), [1234]))
// Function.prototype.myApply = function (obj, ...args) {
//     obj.fn = this
//     return obj.fn(...args)
// }
// console.log("My Apply Value: ", details.myApply(new Person("Vikas", "prayag"), [1234]))

// // ------------Bind
// let bindValue = details.bind(new Person("Vikas", "prayag"), 12345)
// console.log("Bind Value: ", bindValue())
// Function.prototype.myBind = function (context, ...args) {
//     context.fn = this;
//     return () => context.fn(...args)
// }
// let mybindValue = details.myBind(new Person("Vikas", "prayag"), 12345)
// console.log("My Bind Value: ", mybindValue())

// //----------------------------- curring
// function Person(name, addr) {
//     this.name = name;
//     this.addr = addr;
// }
// function Food(name, addr) {
//     this.category = "food"
//     Person.call(this, name, addr)
// }
// console.log(new Food("Vikas", "prayag"))


// let stringValue = "vikasyadav"
// // charAt
// let charAtValue = stringValue.charAt(1)
// console.log("Char At value: ", charAtValue)
// String.prototype.myCharAt = function (val) {
//     console.log(this, "char") //
//     let outputValue = '';
//     for (let i = 0; i < this.length; i++) {
//         if (val === i) {
//             outputValue = this[i]
//         }
//     }
//     return outputValue
// }
// let myCharAtValue = stringValue.myCharAt(0);
// console.log("MY CharAt Value: ", myCharAtValue)

// // toUpperCase
// console.log(stringValue.toUpperCase())
// String.prototype.myToUpperCase = function () {
//     let outputChar = '';
//     for (let i = 0; i < this.length; i++) {
//         outputChar = outputChar + String.fromCharCode(this[i].charCodeAt(0) - 32)
//     }
//     return outputChar;
// }
// console.log(stringValue.myToUpperCase())

// // trim
// let stringValue2 = "       vikas Yadav sonu        "
// console.log(stringValue2.trim())
// String.prototype.mytrim = function () {
//     console.log(this)
//     let initalIndex = 0
//     let lastIndex = this.length;
//     let outputString = ''
//     while (this[initalIndex] === ' ') {
//         initalIndex++
//     }
//     while (this[lastIndex - 1] === ' ') {
//         lastIndex--
//     }
//     for (let i = initalIndex; i < lastIndex; i++) {
//         outputString = outputString + this[i]
//     }
//     return outputString
// }
// console.log(stringValue2.mytrim())

// // repeat
// console.log(stringValue.repeat(2))
// String.prototype.myRepeat = function (val) {
//     let inputSting = this
//     let outputString = '';
//     for (let i = 0; i < val; i++) {
//         outputString = outputString + this
//     }
//     return outputString
// }
// console.log(stringValue.myRepeat(2))


// // ----------------------------------------------------------------------------------
// function curr(fn) {
//     return function curried(...args) {
//         if (args.length >= fn.length) {
//             return fn(...args)
//         } else {
//             return function (...remainingArgs) {
//                 return curried(...args, ...remainingArgs)
//             }
//         }
//     };
// }
// function add(a, b, c, d, e, f) {
//     return a + b + c + d + e + f;
// }

// const curring = curr(add)
function curringData(outerVal) {
    return function dataType(innerVal) {
        if (innerVal === undefined) {
            return outerVal
        } else {
            return curringData(outerVal + innerVal);
        }
    }
}
console.log(curringData(1)(3)(5)(7)(9)(11)())


//spread return in array

// // --------------- Polyfills 
// // Arry - Filter,push, reverse, slice, short,at, isArry, Keys
// // String - replaceAll, split

