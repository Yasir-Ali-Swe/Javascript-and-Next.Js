// Variable data types
let name = "Alice";           // String
let age = 25;                 // Number
let isStudent = true;         // Boolean
let address = null;           // Null
let user = undefined;         // Undefined

// Template literals
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Accessing array element

// Objects
let person = {
    name: "Bob",
    age: 30,
    isStudent: false,
    greet: function () {
        console.log("Hello, " + this.name);
    }
};
console.log(person.name); // Accessing object property
person.greet();           // Calling object method

// Function with default parameters
function greetUser(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}
greetUser();              // Uses default parameter
greetUser("Charlie");     // Uses passed parameter

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3));  // 8

// Destructuring
const [first, second] = fruits;
console.log(first, second); // Apple Banana

const { name: personName, age: personAge } = person;
console.log(personName, personAge); // Bob 30

// Spread operator
let newFruits = [...fruits, "Grapes"];
console.log(newFruits); // ["Apple", "Banana", "Cherry", "Grapes"]

// Ternary operator
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);

// Loop through an array
fruits.forEach(fruit => {
    console.log(fruit);
});

// Try-catch block
try {
    let result = add("hello", 5);
    console.log(result);
} catch (error) {
    console.log("Error occurred:", error);
}
