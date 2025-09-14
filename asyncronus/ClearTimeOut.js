// clearTimeout method of the window interface cancel a timeout previously established by calling 

let b = setTimeout(() => {
    console.log("Set time out Second")
}, 3000)
let c = setTimeout(() => {
    console.log("Set time out Threed")
}, 1000)
clearTimeout(b)