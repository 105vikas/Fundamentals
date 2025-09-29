function swap(value1, value2) { //3,4
    value1 = value1 + value2;
    value2 = value1 - value2;
    value1 = value1 - value2;
}
// find an element in a sorted array // arr: [2,4,6,8,10,12,14], element: 12

function findElement(arr, element) {
    if (arr.length === 0) {
        console.log("Length must be grater")
        return;
    }
    if (arr.length === 1) {
        if (arr[0] === element) {
            console.log("yes it contain element")
        } else {
            console.log("it don't contain element")
        }
        return;
    }

    let i = 0;
    let j = arr.length - 1;
    let midIndex = Math.round((j - i) / 2)

    while (i < j) {
        if (arr[midIndex] === element) {
            console.log("yes it contain element, Index: ", midIndex)
            return;
        }
        if (arr[midIndex] > element) {
            j = midIndex - 1;
            midIndex = Math.round((j - i) / 2)
        } else if (arr[midIndex] < element) {
            i = midIndex + 1;
            midIndex = i + Math.round((j - i) / 2)
        }
    }

    if (arr[i] === element || arr[j] === element) {
        console.log("Index: ", i, j, "yes it contain element")
    } else {
        console.log("it don't contain element")
    }
}
// findElement([2, 3, 4, 6, 8, 9], 12)

// find an element in a almost sorted array // arr: [12,14,2,4,6,8,10], element: 12 ->[14,12,10,8]



function elementInAlmostShort(arr, element) {
    let breakPoint = 0; //1. 
    let increment = arr[0] < arr[1];  //true
    let decrement = arr[0] > arr[1];
    while (arr[breakPoint] < arr[breakPoint + 1] && increment) {    //n
        breakPoint++;
    }
    while (arr[breakPoint] > arr[breakPoint] && decrement) {    //n
        breakPoint--;
    }
    let firstIndex = 0;
    let endPointFirstIndex = breakPoint;
    let endPointLastIndex = breakPoint + 1
    let lastIndex = arr.length - 1

    while (firstIndex < endPointFirstIndex) {
        arr[firstIndex] = arr[firstIndex] + arr[endPointFirstIndex];
        arr[endPointFirstIndex] = arr[firstIndex] - arr[endPointFirstIndex];
        arr[firstIndex] = arr[firstIndex] - arr[endPointFirstIndex];

        firstIndex++;
        endPointFirstIndex--;
    }
    while (endPointLastIndex < lastIndex) {
        arr[endPointLastIndex] = arr[endPointLastIndex] + arr[lastIndex];
        arr[lastIndex] = arr[endPointLastIndex] - arr[lastIndex];
        arr[endPointLastIndex] = arr[endPointLastIndex] - arr[lastIndex];

        endPointLastIndex++;
        lastIndex--;
    }
    console.log(arr, element)
    findElement(arr, element)   // 2n+logn
}
// elementInAlmostShort([12, 14, 2, 4, 6, 8, 10], 12)

// Reverse an array with Space Complexity O(1)


// Find Missing number in array [9,6,4,2,3,5,7,0,1]


// Remove duplicate numbers from sorted array [2, 4, 4, 6, 8, 8, 10, 10, 10, 18, 18];


// Two Sum


// Longest subarray with sum K [10, 5, 2, 7, 1, 9], K = 15;


// Return maximum subarray sum


// Majority Elements appearing more than n/2 times

