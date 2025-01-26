// Types of Loops

// 1. For loop
console.log("For loop:");
for (let i = 0; i < 5; i++) {
    console.log(i); // Prints 0 to 4
}

// 2. While loop
console.log("\nWhile loop:");
let count = 0;
while (count < 3) {
    console.log(count); // Prints 0 to 2
    count++;
}

// 3. Do-While loop
console.log("\nDo-While loop:");
let index = 0;
do {
    console.log(index); // Prints 0 (at least once)
    index++;
} while (index < 2);

// 4. For...of loop (iterates over array elements)
console.log("\nFor...of loop:");
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit); // Prints each fruit
}

// 5. For...in loop (iterates over object properties)
console.log("\nFor...in loop:");
let car = { make: "Toyota", model: "Corolla", year: 2020 };
for (let key in car) {
    console.log(`${key}: ${car[key]}`); // Prints each property of the car object
}

// String Methods

let sentence = "Hello, world!";

// 1. .toUpperCase() - Converts string to uppercase
console.log("\nString Method - .toUpperCase():");
console.log(sentence.toUpperCase()); // "HELLO, WORLD!"

// 2. .toLowerCase() - Converts string to lowercase
console.log("\nString Method - .toLowerCase():");
console.log(sentence.toLowerCase()); // "hello, world!"

// 3. .slice() - Extracts a part of a string
console.log("\nString Method - .slice():");
console.log(sentence.slice(7, 12)); // "world"

// 4. .split() - Splits string into an array based on a separator
console.log("\nString Method - .split():");
let words = sentence.split(" ");
console.log(words); // ["Hello,", "world!"]

// 5. .replace() - Replaces a part of a string with another string
console.log("\nString Method - .replace():");
console.log(sentence.replace("world", "JavaScript")); // "Hello, JavaScript!"

// Array Methods

let numbers = [10, 20, 30, 40];

// 1. .push() - Adds an element to the end of an array
console.log("\nArray Method - .push():");
numbers.push(50);
console.log(numbers); // [10, 20, 30, 40, 50]

// 2. .pop() - Removes the last element from an array
console.log("\nArray Method - .pop():");
numbers.pop();
console.log(numbers); // [10, 20, 30, 40]

// 3. .shift() - Removes the first element from an array
console.log("\nArray Method - .shift():");
numbers.shift();
console.log(numbers); // [20, 30, 40]

// 4. .unshift() - Adds an element to the beginning of an array
console.log("\nArray Method - .unshift():");
numbers.unshift(10);
console.log(numbers); // [10, 20, 30, 40]

// 5. .map() - Creates a new array by applying a function to each element
console.log("\nArray Method - .map():");
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [20, 40, 60, 80]

// 6. .filter() - Creates a new array with elements that pass a condition
console.log("\nArray Method - .filter():");
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [10, 20, 30, 40]

// 7. .forEach() - Executes a function for each array element
console.log("\nArray Method - .forEach():");
numbers.forEach(num => console.log(num)); // Prints each number

// 8. .find() - Finds the first element that satisfies a condition
console.log("\nArray Method - .find():");
let foundNumber = numbers.find(num => num > 25);
console.log(foundNumber); // 30
