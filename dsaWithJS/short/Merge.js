function getSortArray(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let halfLength = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, halfLength));
    let rightArr = mergeSort(arr.slice(halfLength));

    console.log("leftArr", leftArr);
    console.log("rightArr", rightArr);

    let output = getSortArray(leftArr, rightArr);
    console.log("output", output);

    return output;
}

let arr = [5, 3, 8, 4, 2, 7, 1, 6];
console.log("Final sorted:", mergeSort(arr));
