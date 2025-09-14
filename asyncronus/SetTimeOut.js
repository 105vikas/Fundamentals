// setTimeout method of the window interface sets atimer which executes a function or specificed piece of code once the time expires 

let a = setTimeout(() => {
    console.log("Set time out First")
}, 5000)
let b = setTimeout(() => {
    console.log("Set time out Second")
}, 3000)
let c = setTimeout(() => {
    console.log("Set time out Threed")
}, 1000)
clearTimeout(b)