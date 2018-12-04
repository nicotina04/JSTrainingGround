// Fill the array with random integers
const ar = [];

for (var i = 0; i < 20; ++i) {
    ar.push(Math.floor(Math.random() * 122));
}

// The array not sorted
console.log(ar);

const bubbleSort = (arr) => {
    range = arr.length;

    for (let x = 0; x < range - 1; ++x) {
        for (let y = 0; y < range - x; ++y) {
            if (arr[y] > arr[y + 1]) {
                let temp = arr[y + 1];
                arr[y + 1] = arr[y];
                arr[y] = temp;
            }
        }
    }
}

bubbleSort(ar);

console.log(ar);
