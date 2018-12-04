const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function code
const interpolationSearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = low + (high - low) * Math.floor((target - arr[low]) / (arr[high] - arr[low]));
        if (target < arr[mid]) { high = mid + 1; }
        else if (target > arr[mid]) { low = mid + 1; }
        else { return mid; }
    }

    return false;
}

// Test code
var target = [];
var x = 0;

while(x < 2000) {
  target.push(x + 1);
  ++x;
}

rl.question('Input the value what you want to find ', (answer) => {
    let res = interpolationSearch(target, answer);

  if (res === false) {
    console.log("Key does not exist");
  } else {
    console.log("Key found, index is " + res);
  }

  rl.close();
});
