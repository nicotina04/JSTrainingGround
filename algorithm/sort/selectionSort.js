// Fill the array with random integers
const ar = [];

for (var i = 0; i < 20; ++i) {
    ar.push(Math.floor(Math.random() * 122));
}

// The array not sorted
console.log(ar);

const selectionSort = (arr) => {
    let range = arr.length;
    for (let x = 0; x < range - 1; ++x) {
        minidx = x;
        for (let y = x + 1; y < range; ++y) {
            if (arr[y] < arr[x]) {
                minidx = y;
                let temp = arr[minidx];
                arr[minidx] = arr[x];
                arr[x] = temp;
            }
        }
    }
}

selectionSort(ar);

console.log(ar);
