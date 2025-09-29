

let a = [10, 20, 30, 40, 50]
// Map polyfills 
const normalMap = a.map((curr, i) => {
    return curr * 2;
})
console.log(normalMap, "Normal Map")

Array.prototype.myMap = function (callbackFn) {
    let inArray = this;
    let outputArray = []
    for (let i = 0; i < inArray.length; i++) {
        outputArray[i] = callbackFn(this[i])
    }
    return outputArray;
}
const polyMap = a.myMap((curr) => {
    return curr * 2;
})
console.log(polyMap, "Polyfilss Map")

// ForEach polyfills

a.forEach((curr, i, arr) => {
    curr + 2;
});
console.log(a, "Normal ForEach")

Array.prototype.myForEach = function (callbackFn) {
    console.log(this)
    for (let i = 0; i < this.length; i++) {
        console.log(this[i])
        console.log(callbackFn(this[i]))
    }
}
a.myForEach((curr) => {
    curr + 5;
})

// Prototype is mechanism by which javascript object inherit feature from one another, Every object in JavaScript has a build -in property which is call prototype

// Prototype Chaining - As prototype is iteself an object, so the prototype will have it's own prototype make what's called a prototype chain

// __proto__ & Prototype
console.log(Object.__proto__, "Prototype")

// Function Constructor creates function object. Calling the constructor directly can create functions dynamically, but suffers from security & similar performance issue
const sum = new Function("a", "b", "return a+b");
console.log("Function Constructor: ", sum(2, 6))

// Class Constructor: constructor method is a special method of a class for creating and insitializing an object instance of that class
class constClass {
    constructor() {
        this.name = "Class Constructor"
        console.log("Constructor class")
    }
}
const classConst = new constClass();
console.log(classConst.name)



///////////////////////////////////////////////////////



let array = [10, 20, 30, 40, 50, " "]
// My map
let mapArray = array.map((item) => item * 2)
console.log("Map prototype: ", mapArray)

Array.prototype.myMap = function (callbackFn) {
    let inputArray = this;
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        outputArray[i] = callbackFn(this[i])
    }
    return outputArray;
}

let myMapArray = array.myMap((item) => item * 3)
console.log("Mymap prototype: ", myMapArray)

//ForEach
array.forEach((item) => {
    console.log(item * 2)
})

Array.prototype.myForEach = function (callbackFn) {
    let inputArray = this;
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = callbackFn(this[i])
    }
    return inputArray;
}
let arr = [];
array.myForEach((item) => {
    arr.push(item * 1)
})
console.log(arr)

// My Index of
console.log(array.indexOf(30))

Array.prototype.myIndexOf = function (item) {
    let inputArray = this;
    var outputIndex = -1;
    for (let i = 0; i < inputArray.length; i++) {
        if (item === inputArray[i]) {
            outputIndex = i;
        }
    }
    return outputIndex
}
console.log(array.myIndexOf(" "))

// myReduce

const reducedValue = array.reduce((accumulator, currenValue) => currenValue + accumulator, 0)
console.log("Reduced Valuse: ", reducedValue)
Array.prototype.myReduce = function (callbackFn) {
    let outPutValue = 0;
    for (let i = 0; i < this.length; i++) {
        outPutValue = callbackFn(this[i], outPutValue)
    }
    return outPutValue
}
const myReduceValue = array.myReduce((accumulator, currenValue) => currenValue + accumulator, 0)
console.log("My Reduce Value: ", myReduceValue)

// myEvery
let everyValue = array.every((item) => item / 10)
console.log("Every Value: ", everyValue)
Array.prototype.myEvery = function (callbackFn) {
    let outputValue = true;
    for (let i = 0; i < this.length; i++) {
        if (!callbackFn(this[i])) {
            return false
        }
    }
    return outputValue;
}
let myEveryValue = array.myEvery(item => item / 10)
console.log("My Every Value: ", myEveryValue)

// mySome
let someValue = array.some((item) => item <= 10)
console.log("Some value: ", someValue)
Array.prototype.mySome = function (callbackFn) {
    let outPutValue = false
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i])) {
            return true
        }
    }
    return outPutValue
}
let mySomeValue = array.mySome((item) => item <= 10)
console.log("My some Value: ", mySomeValue)


// Find - return first value that trigure if not any value trigger then return undefine
let findValue = array.find(item => item > 20)
console.log("Find Value", findValue)
Array.prototype.myFind = function (callbackFn) {
    let outputValue;
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i])) {
            return this[i]
        }
    }
    return outputValue;
}
let myFindValue = array.myFind(item => item > 20)
console.log("My Find Value", myFindValue)


// ------------------------------------------------------------ myFlat
let arrValue = [10, 20, 30, [40, 50, [60, 70]]]
let flatValue = arrValue.flat(4)
console.log("Flat Value: ", flatValue)

Array.prototype.myFlat = function (value) {
    const flatValue = (arr, depth) => {
        return depth > 0
            ? arr.reduce((acc, val) => {
                return acc.concat(Array.isArray(val) ? flatValue(val, depth - 1) : val)
            }, []) : arr.slice();
    }
    return flatValue(this, value)
}
let myFlatValue = arrValue.myFlat(2)
console.log("My Flat Value: ", myFlatValue)


// myConcat
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10, 11]
const concatValue = arr1.concat(arr2)
console.log("Concate value: ", concatValue)
Array.prototype.myConcat = function (inputArray) {
    let inputArraySecond = inputArray
    let outputArray = this;
    for (let i = 0; i < inputArraySecond.length; i++) {
        outputArray.push(inputArraySecond[i])
    }
    return outputArray;
}
const myConcatValue = arr1.myConcat(arr2)
console.log("My Concate Value: ", myConcatValue)


// call, apply and bind
function Person(name, address) {
    this.name = name;
    this.address = address
}
let details = function (id) {
    console.log(this)
    return `Person ${id} ${this.name} ${this.address}`;
}
// ----------- Call
console.log("Call Value: ", details.call(new Person("Vikas", "prayag"), 123))
Function.prototype.myCall = function (context, ...args) {
    context.fn = this;
    return context.fn(...args);
}
console.log("My Call Value: ", details.myCall(new Person("Vikas", "prayag"), 123))

// ------------ Apply
console.log("Apply Value: ", details.apply(new Person("Vikas", "prayag"), [1234]))
Function.prototype.myApply = function (obj, ...args) {
    obj.fn = this
    return obj.fn(...args)
}
console.log("My Apply Value: ", details.myApply(new Person("Vikas", "prayag"), [1234]))

// ------------Bind
let bindValue = details.bind(new Person("Vikas", "prayag"), 12345)
console.log("Bind Value: ", bindValue())
Function.prototype.myBind = function (context, ...args) {
    context.fn = this;
    return () => context.fn(...args)
}
let mybindValue = details.myBind(new Person("Vikas", "prayag"), 12345)
console.log("My Bind Value: ", mybindValue())

//----------------------------- curring
function Person(name, addr) {
    this.name = name;
    this.addr = addr;
}
function Food(name, addr) {
    this.category = "food"
    Person.call(this, name, addr)
}
console.log(new Food("Vikas", "prayag"))


let stringValue = "vikasyadav"
// charAt
let charAtValue = stringValue.charAt(1)
console.log("Char At value: ", charAtValue)
String.prototype.myCharAt = function (val) {
    console.log(this, "char") //
    let outputValue = '';
    for (let i = 0; i < this.length; i++) {
        if (val === i) {
            outputValue = this[i]
        }
    }
    return outputValue
}
let myCharAtValue = stringValue.myCharAt(0);
console.log("MY CharAt Value: ", myCharAtValue)

// toUpperCase
console.log(stringValue.toUpperCase())
String.prototype.myToUpperCase = function () {
    let outputChar = '';
    for (let i = 0; i < this.length; i++) {
        outputChar = outputChar + String.fromCharCode(this[i].charCodeAt(0) - 32)
    }
    return outputChar;
}
console.log(stringValue.myToUpperCase())

// trim
let stringValue2 = "       vikas Yadav sonu        "
console.log(stringValue2.trim())
String.prototype.mytrim = function () {
    console.log(this)
    let initalIndex = 0
    let lastIndex = this.length;
    let outputString = ''
    while (this[initalIndex] === ' ') {
        initalIndex++
    }
    while (this[lastIndex - 1] === ' ') {
        lastIndex--
    }
    for (let i = initalIndex; i < lastIndex; i++) {
        outputString = outputString + this[i]
    }
    return outputString
}
console.log(stringValue2.mytrim())

// repeat
console.log(stringValue.repeat(2))
String.prototype.myRepeat = function (val) {
    let inputSting = this
    let outputString = '';
    for (let i = 0; i < val; i++) {
        outputString = outputString + this
    }
    return outputString
}
console.log(stringValue.myRepeat(2))


// ----------------------------------------------------------------------------------
function curr(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
            return function (...remainingArgs) {
                return curried(...args, ...remainingArgs)
            }
        }
    };
}
function add(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}

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