let value = [10, 31, 25, 25, 43, 66, 92, 88, 77];

let maxValue = Math.max(...value)
let unitDigitCount = 0;
let x = 1;
while (maxValue > 0) {
    let dummyArray = []
    for (let i = 0; i < value.length; i++) {
        let singleDigit = Math.floor((value[i] % Math.pow(10, x)) / Math.pow(10, unitDigitCount))
        dummyArray[singleDigit] = value[i]
    }

    let shortedArray = []
    let removeUndefineIdx = 0;

    for (let i = 0; i < dummyArray.length; i++) {
        if (dummyArray[i] !== undefined) {
            shortedArray[removeUndefineIdx] = dummyArray[i]
            removeUndefineIdx++
        }
    }
    maxValue = Math.floor(maxValue / 10)
    value = shortedArray
    unitDigitCount++;
    x++;
}

console.log(value)
