// String operations
const str = "Hello, JavaScript!";
console.log(str.toUpperCase()); // Convert to uppercase
console.log(str.toLowerCase()); // Convert to lowercase
console.log(str.includes("Java")); // Check if it contains a substring
console.log(str.replace("JavaScript", "World")); // Replace part of the string
console.log(str.split(" ")); // Split into an array of words

// Array operations
const fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Orange"); // Add an element
console.log(fruits); // ["Apple", "Banana", "Cherry", "Orange"]
fruits.pop(); // Remove the last element
console.log(fruits); // ["Apple", "Banana", "Cherry"]
console.log(fruits.join(", ")); // Convert array to string
fruits.forEach((fruit) => console.log(`I love ${fruit}`)); // Loop through array

// Object operations
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  start: function () {
    console.log(`Starting the ${this.brand} ${this.model}.`);
  },
};

// Access object properties
console.log(car.brand); // Toyota
console.log(car["model"]); // Corolla

// Update and add properties
car.year = 2023;
car.color = "Blue";
console.log(car); // { brand: "Toyota", model: "Corolla", year: 2023, color: "Blue", start: [Function: start] }

// Call object method
car.start();

// Combine strings, arrays, and objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old.`);
});
