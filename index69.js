const numbers = [1, 2, 3, 4, 5, 6];

// 1. forEach: Print each number
numbers.forEach((num) => console.log("Number:", num));

// 2. map: Create a new array with each number doubled
const doubled = numbers.map((num) => num * 2);
console.log("Doubled Array:", doubled);

// 3. filter: Create a new array with even numbers
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evens);

// 4. reduce: Calculate the sum of all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of Numbers:", sum);

// 5. find: Find the first number greater than 3
const firstGreaterThanThree = numbers.find((num) => num > 3);
console.log("First Number Greater than 3:", firstGreaterThanThree);
