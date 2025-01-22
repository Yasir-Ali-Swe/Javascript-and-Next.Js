// Array for demonstration
const numbers = [1, 2, 3, 4, 5];

// 1. For Loop
console.log("For Loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2. While Loop
console.log("\nWhile Loop:");
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

// 3. Do-While Loop
console.log("\nDo-While Loop:");
i = 0;
do {
  console.log(numbers[i]);
  i++;
} while (i < numbers.length);

// 4. For...of Loop (for iterables like arrays)
console.log("\nFor...of Loop:");
for (const num of numbers) {
  console.log(num);
}

// 5. For...in Loop (for iterating over object properties)
console.log("\nFor...in Loop:");
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 6. forEach Loop (Array-specific, higher-order function)
console.log("\nforEach Loop:");
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// 7. map Loop (Array-specific, returns a new array)
console.log("\nmap Loop:");
const doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);
