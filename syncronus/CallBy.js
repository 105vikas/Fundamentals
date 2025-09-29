// Call by value: when function is call the value of argument is copy into a new memory location for function paremeter
let ab = 10;
console.log("Call by value1: ", ab);
function b(c) {
    c = 20;
    console.log("change value: ", c)
}
b(ab);
console.log("Call by value2: ", ab);

// call by reference - when an object/array passed to function, a copy of the reference to that object is passed. modifing the inside function afect the real object.
let obj = { value: 10 }
function changeValue(obj) {
    obj.value = 20
}
console.log("call by value1: ", obj)
changeValue(obj)
console.log("call by value2: ", obj)