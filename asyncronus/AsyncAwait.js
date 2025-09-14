// // 1.
// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("calling2")
//             resolve("resolved");
//         }, 2000);
//     });
// }
// const asyncCall1 = async () => {
//     console.log("calling");
//     // Js engine waiting for promise to setteled 
//     const result = await resolveAfter2Seconds();
//     console.log("calling3");
//     const result2 = await resolveAfter2Seconds();
//     console.log("calling4");
// }
// asyncCall1();

// //2.
// const resolveAfter2Seconds1 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("calling2")
//         resolve("resolved");
//     }, 2000);
// })
// const asyncCall = async () => {
//     console.log("calling");
//     // Js engine waiting for promise to setteled 
//     const result = await resolveAfter2Seconds1;
//     console.log("calling3");
//     const result2 = await resolveAfter2Seconds1;
//     console.log("calling4");
// }
// asyncCall();





// async funciton always return a promise
// await is keyword that use only inside an async function
// async function getData() {
//     return "always return in promise"
//     or
//     return new Promise((resolve, reject) => resolve("always return in promise"))
// }
// const dataPromise = getData();
// console.log(dataPromise)
// dataPromise.then(res => console.log(res))

// Async, await are use to handle the promises


// try {
//     const data = await fetch("url")
//     data.json()
// } catch (error) {

// }


// fetch().then(res=>res.json().then(res=>console.log(res)))



// handle error through try catch or asynfunc.catch() because async function return promise


// formate1
const returnPromise = fetch("https://dummyjson.com/todos")
const response = returnPromise.then((response) => response.json())
response.then(data => console.log(data, "DATA"))
    .catch(err => console.log(err, "Error"))
    .finally(value => console.log("Value"))

// formate2
const data = async () => {
    const returnPromise = await fetch("https://dummyjson.com/todos")
    return returnPromise;
}
data()
    .then(response => response.json())
    .then(data => console.log(data, "Data"))
