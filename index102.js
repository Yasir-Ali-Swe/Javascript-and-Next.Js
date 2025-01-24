// Arrays
console.log("Arrays:");
const numbers = [10, 20, 30, 40];
console.log("Array:", numbers);
console.log("First Element:", numbers[0]);
numbers.push(50); // Add an element
console.log("After push:", numbers);
numbers.pop(); // Remove the last element
console.log("After pop:", numbers);
numbers.forEach((num, index) => console.log(`Index ${index}: ${num}`));

// Strings
console.log("\nStrings:");
const str = "Hello, JavaScript!";
console.log("String:", str);
console.log("Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Substring (0, 5):", str.substring(0, 5));
console.log("Split by comma:", str.split(","));
console.log("Includes 'JavaScript':", str.includes("JavaScript"));

// Objects
console.log("\nObjects:");
const person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};
console.log("Object:", person);
console.log("Name:", person.name);
console.log("Age:", person.age);
person.greet();
person.job = "Developer"; // Add a new property
console.log("After adding job:", person);
delete person.age; // Remove a property
console.log("After deleting age:", person);

// Array of Objects
console.log("\nArray of Objects:");
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 },
  { name: "Charlie", age: 32 }
];
people.forEach(person => console.log(`${person.name} is ${person.age} years old.`));
