let value = [10, 1, 25, 3, 40, 5, 16, 2, 8, 0, 10];

let midInd = Math.round(value.length / 2)
let midVal = value[midInd]

let arrayFirst = []
let arraySec = []
for (let i = 0; i < value.length; i++) {
    if (value[i] > midVal) {
        arrayFirst.push(value[i])
    } else {
        arraySec.push(value[i])
    }
}

console.log("Quick midVal: ", midVal)
console.log("Quick arrayFirst: ", arrayFirst)
console.log("Quick arraySec: ", arraySec)
console.log("Quick Sort: ", value)