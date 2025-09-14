// clearInterval() mthod of the window interface cancel a timed through which repeating action previously established by calling to setInterval()

let ab = setInterval(() => {
    console.log("SET Interval")
}, 500)

clearInterval(ab)
