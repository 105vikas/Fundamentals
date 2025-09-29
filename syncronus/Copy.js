// shallow copy of an object is a copy whose property share the same refernce as those of the source object from which the copy was made. as result when you change any object cause other object to change too.
// (Re-assigning top-level properties of the copy does not affect the source object.)
//1.
// let shallow = ["object1", { obj2: "Object1" }]
// shallowCopy = [...shallow];
// // shallowCopy = Array.from(shallow)
// shallowCopy[0] = "object2"
// shallowCopy[1].obj2 = "object2"
//2.
let shallow = { obj: "object1", obj1: { obj2: "Object1" } }
// shallowCopy = { ...shallow };
shallowCopy = Object.assign(shallow)
shallowCopy.obj = "object2"
shallowCopy.obj1.obj2 = "object2"

console.log("shallow: ", shallow) // also change because of shallow copy
console.log("shallow copy: ", shallowCopy)

// Deep Copy (Recursion)
let deep = { obj1: "Object1", obj2: { obj3: "Object1" } }
let deepCopy = JSON.parse(JSON.stringify(deep))
deepCopy.obj1 = "object2";
deepCopy.obj2.obj3 = "Object2"
console.log("Deep: ", deep)
console.log("DeepCopy: ", deepCopy)