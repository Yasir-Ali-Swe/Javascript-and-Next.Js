// Variables
let name = "John Doe";
const PI = 3.14;

// Data Types
let age = 25; // Number
let isAdmin = true; // Boolean
let colors = ["red", "green", "blue"]; // Array
let person = { name: "John Doe", age: 25 }; // Object

// Functions
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("John Doe");

// Conditional Statements
if (age > 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// Loops
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Object Methods
person.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
person.greet();

// Array Methods
colors.forEach((color) => console.log(color));

// String Methods
let sentence = "Hello, world!";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// Math
console.log(Math.PI);
console.log(Math.sqrt(9));

// Error Handling
try {
    let x = 10 / 0;
} catch (error) {
    console.error("An error occurred:", error);
}

// Promises
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.error("An error occurred:", error));

// Async/Await
async function getData() {
    try {
        let response = await fetch("https://example.com/data.json");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
getData();

// Destructuring
let { name: firstName, age } = person;
console.log(firstName);
console.log(age);

// Spread Operator
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

// Rest Operator
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}
console.log(sum(1, 2, 3, 4, 5));
