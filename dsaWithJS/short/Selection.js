let value = [10, 1, 25, 3, 40, 5, 16, 2, 8, 0, 10];

for (let i = 0; i < value.length; i++) {
    let minValue = value[i];
    let minValueIndex = i;
    for (j = i + 1; j < value.length; j++) {
        if (minValue > value[j]) {
            minValue = value[j]
            minValueIndex = j;
        }
    }
    let theredValue = value[i];
    value[i] = value[minValueIndex];
    value[minValueIndex] = theredValue

}

console.log("Selection sort: ", value)