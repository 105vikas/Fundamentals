let value = [10, 1, 25, 3, 40, 5, 16, 2, 8, 0, 10];

// // O(n2)
// for (let j = 0; j < value.length; j++) {
//     let arrayShorted = true
//     for (let i = 0; i < value.length; i++) {
//         if (value[i] > value[i + 1]) {
//             let theredVal = value[i + 1]
//             value[i + 1] = value[i]
//             value[i] = theredVal;
//             arrayShorted = false;
//         }
//     }
//     if (arrayShorted) {
//         break;
//     }
// }

// O(n)
let arrayShorted = true
let i = 0;
while (arrayShorted) {
    let arrayShortedDone = true
    for (let i = 0; i < value.length; i++) {
        if (value[i] > value[i + 1]) {
            let theredVal = value[i + 1]
            value[i + 1] = value[i]
            value[i] = theredVal;
            arrayShortedDone = false
        }
    }
    i++;
    if (arrayShortedDone) {
        arrayShorted = false
    }
}


console.log("Bubble Sort: ", value)