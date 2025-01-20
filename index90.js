// Array for demonstration
const numbers = [10, 20, 30, 40, 50];

// While loop
let i = 0;
console.log("While loop:");
while (i < numbers.length) {
  console.log(`Number (while): ${numbers[i]}`);
  i++;
}

// Do-While loop
let j = 0;
console.log("\nDo-While loop:");
do {
  console.log(`Number (do-while): ${numbers[j]}`);
  j++;
} while (j < numbers.length);

// For loop
console.log("\nFor loop:");
for (let k = 0; k < numbers.length; k++) {
  console.log(`Number (for): ${numbers[k]}`);
}

// ForEach loop
console.log("\nForEach loop:");
numbers.forEach((num) => console.log(`Number (forEach): ${num}`));
