// Closure is the combination of a functioin bundled together with references to it's surrounding state, it means closure gives a function access to it's outer scope. closures creates every time when a function created
function closure() {
    let variable = "Vikas";
    function preClosure() {
        return variable;
    }
    return preClosure();
}
console.log(closure());