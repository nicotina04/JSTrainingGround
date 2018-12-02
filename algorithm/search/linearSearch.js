const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function code
const linearSearch = (arr, key) => {
  let range = arr.length;

  for (var i = 0; i < range; ++i) {
    if (arr[i] === key) { return i; }
  }

  return false;
}

// Test code
var target = [];
var x = 0;

while(x < 100) {
  target.push(x + 1);
  ++x;
}

rl.question('Input the value what you want find ', (answer) => {
  let result = linearSearch(target, answer);
  if(result === undefined) {
    console.log("Key does not exist");
  } else {
    console.log("Key found, index is " + linearSearch(target, Number(answer)));
  }

  rl.close();
});
