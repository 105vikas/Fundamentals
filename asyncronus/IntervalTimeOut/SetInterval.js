// setInterval method of the window interface repeatedly calls a function or exicute a code snipeet with a fixed time delay between each call

let ab = setInterval(() => {
    console.log("SET Interval")
}, 500)
setTimeout(() => {
    clearInterval(ab)
}, 1000)
