// Immediately Invoked Function Expression - is an method in which a JavaScript function runs as soon as it is defined. It is also known as a self-executing 
(async () => {
    console.log("IIFE")
})()
// Arrow Function - 

// Function Declaration/Statement - creates a binding of new function to a given name
function areaOfSquare(width, height) {
    return width * height;
}
console.log(areaOfSquare(5, 5), "Fun Statement");

// Function Expression - the function keyword can be used to define a function inside an expression
const areaSquare = function (width, height) {
    return width * height;
}
console.log(areaSquare(5, 5), "Fun Expression")

// Callback Function -  the function that we pass as an argument to another function 
function say() {
    return "Callback Function"
}
function greating(callback) {
    return callback()
}
console.log(greating(say))


// High oder Function : a function that return a function or takes other function as arguments 
function sayHello() {
    const high = () => {
        console.log("High oder Function");
    };
    return high();
}
sayHello();