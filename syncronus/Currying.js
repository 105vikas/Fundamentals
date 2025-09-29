// Currying 
function button(color) {
    function buttonType(type) {
        function buttonClick(onClick) {
            return [color, type, onClick]
        }
        return buttonClick
    }
    return buttonType;
}
const buttonColor1 = button("Red")
const buttonColor2 = button("Green")

const buttonType1 = buttonColor1("Normal")
const buttonType2 = buttonColor2("boldButton")

const buttonOnClick1 = buttonType1("clickOnPress")
const buttonOnClick2 = buttonType1("clickOnClick")

console.log("Currying1: ", buttonOnClick1)
console.log("Currying2: ", buttonOnClick2)

// // Fibonacci - 0 1 1 2 3 5
function fibona(n) {
    if (n < 0) return "False"
    if (n === 0 || n === 1) return 1;
    return fibona(n - 1) + fibona(n - 2)
}
console.log(fibona(9))

// Factorial using curring - 5*4*3*2*1
function factorial(n) {
    if (n < 0) return "False"
    if (n === 0 || n === 1) return 1
    return n * factorial(n - 1)
}
console.log(factorial(5));