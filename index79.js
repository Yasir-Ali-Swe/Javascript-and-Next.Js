// Array declaration
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. map() - Create a new array with the results of calling a function for every element
let squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);

// 2. filter() - Create a new array with all elements that pass the test
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 3. reduce() - Apply a function against an accumulator and each element to reduce it to a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);

// 4. forEach() - Execute a function for each element in the array
numbers.forEach(num => console.log(`Number: ${num}`));

// 5. find() - Return the first element that passes the test
let firstEven = numbers.find(num => num % 2 === 0);
console.log("First Even Number:", firstEven);

// 6. some() - Check if at least one element passes the test
let hasOddNumber = numbers.some(num => num % 2 !== 0);
console.log("Contains Odd Number?", hasOddNumber);

// 7. every() - Check if every element passes the test
let allEven = numbers.every(num => num % 2 === 0);
console.log("All Numbers Are Even?", allEven);

// 8. sort() - Sort the array in ascending order
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", sortedNumbers);

// 9. reverse() - Reverse the order of the array
let reversedNumbers = [...numbers].reverse();  // Copy the array before reversing to keep the original intact
console.log("Reversed Numbers:", reversedNumbers);

// 10. includes() - Check if the array contains a specific element
let containsFive = numbers.includes(5);
console.log("Contains 5?", containsFive);
