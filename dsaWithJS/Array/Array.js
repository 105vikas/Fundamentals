// ------convert an array [4,5,6,7] into an object { 4: 10, 5: 11, 6: 12, 7: 13 }  
// O(n) Sc(n)

let array = [4, 5, 6, 7]
const convertArrayToObject = (array) => {
    let value = 10;
    let obj = {};
    for (let i = 0; i <= array.length - 1; i++) {
        obj[array[i]] = value;
        value++;
    }
    console.log(obj)
}
// convertArrayToObject(array);


// ----------1) Reverse an array
// O(n) Sc(1)
let arrayForReverse = [4, 5, 6, 7, 8, 9]

function reverseArray(arrayForReverse) {
    let length = arrayForReverse.length - 1;
    let outPutArray = []
    for (let i = length; i >= 0; i--) {
        outPutArray.push(arrayForReverse[i])
    }
    console.log("Reverse an array Method 1: ", outPutArray)

    for (let i = 0; i < Math.round(length / 2); i++) {
        arrayForReverse[i] = arrayForReverse[i] + arrayForReverse[length - i]
        arrayForReverse[length - i] = arrayForReverse[i] - arrayForReverse[length - i]
        arrayForReverse[i] = arrayForReverse[i] - arrayForReverse[length - i]
    }
    console.log("Reverse an arrayMethod 2: ", arrayForReverse)
}
// reverseArray(arrayForReverse)


// --------2) Reverse a string 
// O(n) Sc(n)
let stringForReverse = "vikasyadav"

function reverseString(string) {
    let length = string.length
    //type 1
    let reversedArray = '';
    for (let i = length - 1; i >= 0; i--) {
        reversedArray += string[i]
    }
    console.log("Reverse a string: ", reversedArray)

    //type 2
    let reverseString = string.split('').reverse().join("");
    console.log("Reverse Sting: ", reverseString)
}
// reverseString(stringForReverse)


//----------- 2) find if the string is palindrome or not
// O(n) Sc(1)

let palindromString = "vikasakiv"
function checkPalindrom(palindromString) {
    let length = palindromString.length - 1;
    for (let i = 0; i < Math.round(length / 2); i++) {
        if (palindromString.charAt(i) !== palindromString.charAt(length - i)) {
            console.log("Not a plindrom String")
            return;
        }
    }
    console.log("A plindrom String")
}
// checkPalindrom(palindromString)

//-------------- 3) two string anagrams
// 
let string1 = "vikas"
let string2 = "skavi"

function checkAnagrams(string1, string2) {
    if (string1.length !== string2.length) {
        console.log("Not Anagrams")
        return;
    }
    //object

    let obj1 = {}
    let obj2 = {}

    for (let i = 0; i < string1.length; i++) {
        obj1[string1[i]] = 1
    }
    for (let i = 0; i < string2.length; i++) {
        obj2[string2[i]] = 1
    }
    console.log(obj1, obj2)
    let obj1Keys = Object.keys(obj1)
    let obj2Keys = Object.keys(obj2)
    console.log("11")
    for (let i = 0; i < obj2.length; i++) {
        console.log("222")
        console.log("dlsfkjasldkjf:", obj1Keys[i])
        if (obj1Keys[i] in obj2) {

        }
    }

    // for (let i = 0; i < string1.length; i++) {
    //     let result = false;
    //     for (let j = 0; j < string2.length; j++) {
    //         if (string1.charAt(i) === string2.charAt(j)) {
    //             result = true
    //             break;
    //         }
    //     }
    //     if (!result) {
    //         console.log("Not Anagrams")
    //         return;
    //     }
    // }
    console.log("Yes it Anagrams")
}
checkAnagrams(string1, string2);

// --------------4) merge two sorted arrays in to one sorted arrays    // m+N
let array1 = [3, 5, 7, 8]
let array2 = [1, 2, 6, 9]

function mergeShortedArray(array1, array2) {
    let startIdx = 0;

    for (let i = 0; i < array2.length; i++) {
        if (array2[i] > array1[startIdx]) {
            while (array2[i] > array1[startIdx]) {
                startIdx++;
            }
            array1.splice(startIdx, 0, array2[i])
        } else {
            array1.splice(startIdx, 0, array2[i])
            startIdx++;
        }
    }
    console.log(array1)
}
// mergeShortedArray(array1, array2)

// -----------------------------6) sum of N numbers
function sumOfNumber(number) {
    let sum = number * (number + 1) / 2
    return sum;
}
// console.log("Sum of N number: ", sumOfNumber(5));

//----------------------------- 7) right rotate an array by K numbers

let arrayForRotate = [0, 1, 2, 3, 4, 5, 6, 7, 8]        // O(n)
let rotateBy = 4;

const rotateArrayFun = (array, rotate) => {
    while (rotate > 0) {
        let temp = array.pop();
        array.splice(0, 0, temp)
        rotate--;
    }
    return array;
}
let rotatedArray = rotateArrayFun(arrayForRotate, rotateBy);
console.log("Rotated Array value: ", rotatedArray)


//-------- 8) What is the the Time and Space Complexity of array methods - length, push, pop, shift, unshift, includes, concat, slice

// length ->  O(1), Sc(1)
// push ->      O(1), Sc(1)
// pop ->       O(1), Sc(1)
// shift ->      O(n), T(1)     -> remove from first 
// unshift ->   O(n), T(1)      -> add from first
// includes ->   O(n), T(1)
// concat ->    O(n+m), Sc(n+m) -> because of array    -> return new array
// slice ->     O(n), T(1)

//----------------------------- 9) What is the Time and Space Complexity of Object methods - Keys, Value, Entries
let variable = { 4: 10, 5: 11, 6: 12, 7: 13 }
// console.log(Object.keys(variable))//  ->     O(n), T(n)
// console.log(Object.values(variable))//  ->     O(n), T(n)
// console.log(Object.entries(variable))//  ->     O(n), T(n)

// console.log(variable[6]) //O(1)