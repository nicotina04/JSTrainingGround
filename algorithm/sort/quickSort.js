// Fill the array with random integers
const ar = [];

for (var i = 0; i < 40; ++i) {
    ar.push(Math.floor(Math.random() * 122));
}

// The array not sorted
console.log(ar);

// This quick sort always use index 0 of pivot
const quickSort = (arr) => {
    const range = arr.length;

    if (range <= 1) { return arr; }
    let lower = [];
    let upper = [];
    const pivot = arr[0];
    for (let x = 1; x < range; ++x) {
        if (arr[x] > pivot) { upper.push(arr[x]); }
        else { lower.push(arr[x]); }
    }

    return quickSort(lower).concat([pivot]).concat(quickSort(upper));
}

const sorted = quickSort(ar);

console.log(sorted);
