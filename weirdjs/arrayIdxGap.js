var test = [];

// Show empty array
console.log(test);

// Insert value to index 0
test[0] = 100;

// Show array with one item
console.log(test);

// Insert value to index 10
test[10] = 222;

// See the result!
console.log(test);

// Insert value into index gap
test[4] = 11;

// Now you can see gap split
console.log(test);

// Show this array's length
var range = test.length;
console.log(range);

for (let x = 0; x < range; ++x) {
    // You can see the empty item equals undefined
    console.log(test[x]);
    console.log(test[x] === undefined);
}

// Result of Array + Number is string
console.log(test + 220);
console.log(typeof(test + 220));

// Result of Array - Number is NaN
console.log(test - 200);
// Result of Array * Number is NaN
console.log(test * 2);
