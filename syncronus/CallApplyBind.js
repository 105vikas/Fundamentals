
// Call, Apply, Bind
let village = {
    name: "Prayag",
    type: "rural"
}
let secondVillage = {
    name: "Delhi",
    type: "metro city"
}
printDetils = function (typeOfFun) {
    console.log(`${typeOfFun}: ${this.name} ${this.type}`)
}
printDetils.call(village, "Call Function")
printDetils.apply(village, ["Apply Function"])
const bindDetails = printDetils.bind(village, "Bind")
bindDetails()