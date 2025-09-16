// 1.Check if array is sorted or not
let array = [1, 2, 1]
let sortedArray = true
let decrement = !!(array[0] > array[1])
let increment = !!(array[0] < array[1])
if (increment) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] >= array[i + 1]) {
            sortedArray = false
        }
    }
}
if (decrement) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= array[i + 1]) {
            sortedArray = false
        }
    }
}
console.log("Array is shorted: ", sortedArray)



// 2.Find the largest and the Second largest Element in an array
let arr = [14, 5, 9, 1, 6, 7, 1]

let firstLargest = -1;
let SecondLargest = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
        SecondLargest = firstLargest
        firstLargest = arr[i]
    }
    if (arr[i] < firstLargest && arr[i] > SecondLargest) {
        SecondLargest = arr[i]
    }
}

console.log("first Largest: ", firstLargest)
console.log("Second Largest: ", SecondLargest)



// 3.Compress a string Input: "aaabbcccaaa" â†’ Output: "a3b2c3a3"
let value = "aaabbcccaaa"
let outPut = '';
let count = 1;

if (value === "") {
    console.log("Blank array");
}
for (let i = 0; i < value.length - 1; i++) {
    if (value.charAt(i) === value.charAt(i + 1)) {
        console.log(value.charAt(i + 1), i)
        count++;
    } else {
        outPut = outPut + value.charAt(i);
        outPut = outPut + count;
        count = 1;
    }
}
outPut = outPut + value.charAt(value.
    length - 1);
outPut = outPut + count;
console.log("Output string with a value: ", outPut) // Output string with a value:  a3b2c3a3



// 4.Reverse an array with Space Complexity O(1)
let ar = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(ar.reverse())   // for loop



// 5.Find Missing number in array [9,6,4,2,3,5,7,0,1]
let missingArray = [9, 6, 4, 2, 3, 5, 7, 0, 1]          // T(n)
missingArray.sort();

for (let i = 0; i < missingArray.length; i++) {
    if (i !== missingArray[i]) {
        console.log("Missing Element :", i)
        break;
    }
}



// 6.Remove duplicate numbers from sorted array [2, 4, 4, 6, 8, 8, 10, 10, 10, 18, 18];
let removeArray = [2, 4, 4, 6, 8, 8, 10, 10, 10, 18, 18, 18];
let i = 0;
while (i < removeArray.length - 1) {
    if (removeArray[i] === removeArray[i + 1]) {
        removeArray.splice(i, 1);
    } else {
        i++;
    }
}
console.log("Remove duplicate numbers: ", removeArray)



// 7.two string anagrams
let string1 = "viiaas"
let string2 = "saaiva"

function checkAnagrams(string1, string2) {
    if (string1.length !== string2.length) {
        console.log("Not Anagrams")
        return;
    }

    let obj1 = {}
    let obj2 = {}

    for (let i = 0; i < string1.length; i++) {
        obj1[string1[i]] = 1    // count 
    }
    for (let i = 0; i < string2.length; i++) {
        obj2[string2[i]] = 1
    }
    let ObjKeys1 = Object.keys(obj1)

    for (let i = 0; i < string2.length; i++) {
        let yz = ObjKeys1[i]
        if (obj1[yz] !== obj2[yz]) {
            console.log("Not a Anagrams")
            return;
        }
    }
    console.log("Yes it Anagrams")
}
checkAnagrams(string1, string2);



// 8.merge two sorted arrays in to one sorted arrays    // m+N
let array1 = [-3, -1, 4, 6]
let array2 = [-2, 6]

function mergeShortedArray(array1, array2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] > array2[j]) {
            mergedArray.push(array2[j])
            j++
        } else {
            mergedArray.push(array1[i])
            i++
        }
    }
    while (i < array1.length) {
        mergedArray.push(array1[i])
        i++
    }
    while (j < array2.length) {
        mergedArray.push(array2[j])
        j++;
    }
    console.log("Merged Array: ", mergedArray)
}
mergeShortedArray(array1, array2)



// 9.right rotate an array by K numbers

let arrayForRotate = [0, 1, 2, 3, 4, 5, 6, 7, 8]        // O(n)
let rotateBy = 9;

const rotateArrayFun = (array, rotate) => {
    if (array.length <= 1) {
        return array
    }
    array.reverse()
    let rotateInital = 0;
    let rotateLast = rotate - 1;
    let i = rotate;
    let j = array.length - 1;
    while (rotateInital <= rotateLast) {
        let theredVariable = array[rotateLast]
        array[rotateLast] = array[rotateInital]
        array[rotateInital] = theredVariable;
        rotateInital++;
        rotateLast--;
    }
    while (i <= j) {
        let theredVariable = array[j]
        array[j] = array[i]
        array[i] = theredVariable;
        i++;
        j--;
    }
    return array;
}

let rotatedArray = rotateArrayFun(arrayForRotate, rotateBy);
console.log("Rotated Array value: ", rotatedArray)  // [4, 5, 6, 7, 8, 0, 1, 2, 3]