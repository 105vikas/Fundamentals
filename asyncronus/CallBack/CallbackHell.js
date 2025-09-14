// Inversion of control, Pyramid of Dooom
// Callback is a function passed into another function as an argument which is then exicute inside the outer function.
function b(callback) {
    console.log("step 1")
    callback();
    console.log("step 3")
}
function a() {
    console.log("Step 2")
}
b(a)

// 1.Callback Hell (or Pyramid of Doom) is situation where multiple nested callback function make your code.

function cardOrder(init, callback) {
    init++;
    callback(init)
}
function prceedtoPayment(init, callback) {
    init++;
    callback(init)
}
function showOderSummary(init, callback) {
    init++;
    callback(init)
}
function doOperation() {
    cardOrder(10, (result) => {
        prceedtoPayment(result, (result2) => {
            showOderSummary(result2, (result3) => {
                console.log(`Result ${result3}`)
            })
        })
    })
}
doOperation()

// our code is runing horizentaly not vertically (This structure is Pyramid of Doom)


// Most modern asynchronous Api don't use callbacks. Instead the foundation of asynchronus programming in javascript is the promise.



// 2.Inversion of control (IOC) you loose control of code when you using callback
// cardOrder has responsibilty to exicute the api of prccedtopayment 
// cardorder may exicute two or may not exicute the code 