//[consume]
// Promise is object represents the eventual completion or failure of an asynchronous operation & its resulting value.
// Promise states are pending, fulfilled, rejected.


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 300);
});

myPromise
    .then(handleFulfilledA, handleRejectedA)
    .then(handleFulfilledB, handleRejectedB)
    .then(handleFulfilledC, handleRejectedC);

// The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error).





// Callback
createOrder(["card"], function (orderId) {
    procedToPayment(orderId);
})

// Promise empty object with some data value & it hold that value return by it
const promise = createOrder(["card"]);
// PromiseState -> pending -> fullfild/rejected
// Promise result {data: undefined}  -> {data: orderDetial}
promise.then(function (orderDetial) {
    procedToPayment(orderDetial)
})
// Promise object is immutable 

const GITHUB_API = "https://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API);
console.log(user)
user.then(function (data) {
    console.log(data);
})


// Promise chaining: response has to be return when we are chaining it.
fetch(GITHUB_API)
    .then(orderId => paymenttoProcced(orderId))
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo)
    })



// [produce]

function createObj(card) {
    const pr = new Promise((resolve, reject) => {
        // createOrder
        // validateCart
        // orderId
        if (false) {
            const orderId = "123"
            resolve(orderId)
        } else {
            const err = new Error("not valid")
            reject(err)
        }
    })
    return pr;
}


function proccedToPayment(orderId) {
    const pr = new Promise((resolve, reject) => {
        if (true) {
            resolve("Payment successfull")
        } else {
            const err = new Error("not valid")
            reject(err)
        }
    })
    return pr
}

// // consumed
// const promise = createObj(["a", "b", "c"])
// promise.then(function (orderId) {
//     console.log("Conform: ", orderId)
// })
//     .catch(function (err) {
//         console.log(err.message, "Massage")
//     })


// Promise chaning consume
createObj(["a", "b", "c"])
    .then(function (orderId) {
        console.log("Conform: ", orderId)
        return orderId
    })
    .catch(function (err) {                 // Catch only check the above of it
        console.log(err.message, "Massage")
    })
    .then(function (orderId) {
        return proccedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo)
    })
    .then(function (err) {                 // Catch only check the above of it
        console.log("I will exicute whatever happen")
    })