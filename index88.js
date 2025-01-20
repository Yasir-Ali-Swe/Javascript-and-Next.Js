// Array to work with
const numbers = [10, 20, 30, 40, 50];

// While loop
let i = 0;
console.log("While loop:");
while (i < numbers.length) {
  console.log(`Index ${i}: ${numbers[i]}`);
  i++;
}

// Do...while loop
let j = 0;
console.log("\nDo...while loop:");
do {
  console.log(`Index ${j}: ${numbers[j]}`);
  j++;
} while (j < numbers.length);

// For loop
console.log("\nFor loop:");
for (let k = 0; k < numbers.length; k++) {
  console.log(`Index ${k}: ${numbers[k]}`);
}

// ForEach loop
console.log("\nForEach loop:");
numbers.forEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});
