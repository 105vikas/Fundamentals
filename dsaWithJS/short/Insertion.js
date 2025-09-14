let value = [10, 1, 25, 3, 40, 5, 16, 2, 8, 0, 10];

let x = 1;
while (x < value.length) {
    for (let j = 0; j < value.length; j++) {
        if (value[j] > value[x]) {
            let item = value.splice(x, 1)
            value.splice(j, 0, item[0])
            break;
        }
    }
    x++;
}

console.log("Insertion sort:", value)