// Fill the array with random integers
const ar = [];

for (var i = 0; i < 20; ++i) {
    ar.push(Math.floor(Math.random() * 122));
}

// The array not sorted
console.log(ar);

const insertionSort = (arr) => {
    let len = arr.length;

    for (let i = 1; i < len; ++i) {
        let idx = i;
        let target = arr[i];
        while (idx > 0 && target < arr[idx - 1]) {
            arr[idx] = arr[idx - 1];
            --idx;
        }
        arr[idx] = target;
    }
}

insertionSort(ar);

// The sorted array
console.log(ar);
