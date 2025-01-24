// For loop
console.log("For loop:");
for (let i = 0; i < 3; i++) {
  console.log(`Iteration ${i}`);
}

// While loop
console.log("\nWhile loop:");
let j = 0;
while (j < 3) {
  console.log(`Iteration ${j}`);
  j++;
}

// Do-while loop
console.log("\nDo-while loop:");
let k = 0;
do {
  console.log(`Iteration ${k}`);
  k++;
} while (k < 3);

// For...of loop (works with arrays, strings, etc.)
console.log("\nFor...of loop:");
const array = [10, 20, 30];
for (const value of array) {
  console.log(value);
}

// For...in loop (works with objects or arrays)
console.log("\nFor...in loop:");
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// Using Array.prototype.forEach (callback-style loop)
console.log("\nforEach loop:");
array.forEach((value, index) => {
  console.log(`Index ${index}: ${value}`);
});
