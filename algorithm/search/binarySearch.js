const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function code
const binarySearch = (arr, key) => {
  let range = arr.length;
  let lower = 0;
  let upper = range - 1;
  var mid;

  while (lower <= upper) {
    mid = Math.floor((lower + upper) / 2);
    // Tracing
    console.log(mid, lower, upper);

    if (arr[mid] < key) {
      lower = mid + 1;
    } else if (arr[mid] > key) {
      upper = mid - 1;
    } else {
      return mid;
    }
  }

  console.log(mid, lower, upper);
  return false;
}

const binaryRecursive = (arr, key, min, max) => {
  let mid = Math.floor((min + max) / 2);
  // console.log(mid, min, max);
  if (min > max) { return false; }

  if (arr[mid] > key) {
    return binaryRecursive(arr, key, min, mid - 1);
  } else if (arr[mid] < key) {
    return binaryRecursive(arr, key, mid + 1, max);
  } else {
    return mid;
  }
}

// Test code
var target = [];
var x = 0;

while(x < 1304) {
  target.push(x + 1);
  ++x;
}

rl.question('Input the value what you want to find ', (answer) => {
  let result = binarySearch(target, answer);
  let result2 = binaryRecursive(target, answer, 0, target.length - 1);

  if (result === false || result2 === false) {
    console.log("Key does not exist");
  } else {
    console.log("Key found, index is " + result);
    console.log("Recursive reuslt is same " + result2);
  }

  rl.close();
});
