// 1.Check if array is sorted or not

let array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(Array.isArray(array))



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

for (let i = 0; i < value.length; i++) {
    if (value.charAt(i) === value.charAt(i + 1)) {      // last not include
        count++;
    } else {
        outPut = outPut + value.charAt(i);
        outPut = outPut + count;
        count = 1;
    }
}

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
let removeArray = [2, 4, 4, 6, 8, 8, 10, 10, 10, 18, 18];
let newArray = [];    // not use new arry & last digigint i++;
let time = 0;

for (let i = 0; i < removeArray.length; i++) {
    if (removeArray[i] === removeArray[i + 1]) {
        if (time === 0) {
            newArray.push(removeArray[i])
        }
        time++;
        i++;
    } else {
        time = 0;
        newArray.push(removeArray[i])
    }
}

console.log("Remove duplicate numbers: ", newArray)



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
let array1 = [3, 5, 7, 8, 13, 16]
let array2 = [1, 2, 6, 9, 12]

function mergeShortedArray(array1, array2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (array1.length > 0 && array2.length > 0) {
        if (array1[i] > array2[j]) {
            mergedArray.push(array2[j])
            array2.shift()              // remove shift
        } else {
            mergedArray.push(array1[i])
            array1.shift()
        }
    }
    while (array1.length > 0) {
        mergedArray.push(array1[i])
        array1.shift()
    }
    while (array2.length > 0) {
        mergedArray.push(array2[j])
        array2.shift()
    }
    console.log(mergedArray)
}

mergeShortedArray(array1, array2)



// 9.right rotate an array by K numbers

let arrayForRotate = [0, 1, 2, 3, 4, 5, 6, 7, 8]        // O(n)
let rotateBy = 4;

const rotateArrayFun = (array, rotate) => {
    let removedArry = array.splice(0, rotate + 1)
    let data = array.concat(...removedArry)
    return data;
}

let rotatedArray = rotateArrayFun(arrayForRotate, rotateBy);
console.log("Rotated Array value: ", rotatedArray)  // [4, 5, 6, 7, 8, 0, 1, 2, 3]

// [ 5, 6, 7, 8, 0, 1, 2, 3,4]

//[0, 1, 2, 3, 4, 5, 6, 7, 8]  ->[8,7,5....]->8,7,5
//[8,7,6,5,4,3,2,1,0]
//[5,6,7,8,0,1,2,3,4]