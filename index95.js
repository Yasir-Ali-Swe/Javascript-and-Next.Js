// Variables and Data Types
let number = 10;               // Number
const name = "John Doe";       // String
let isStudent = true;          // Boolean
let scores = [85, 90, 78];     // Array
let person = {                 // Object
  firstName: "Jane",
  lastName: "Doe",
  age: 25
};

// Control Flow Statements
if (isStudent) {
  console.log(`${name} is a student.`);
} else {
  console.log(`${name} is not a student.`);
}

// Loop through the scores array
for (let i = 0; i < scores.length; i++) {
  console.log(`Score ${i + 1}: ${scores[i]}`);
}

// Switch statement
switch (person.age) {
  case 18:
    console.log("You are just an adult.");
    break;
  case 25:
    console.log("You are 25 years old.");
    break;
  default:
    console.log("Age is just a number!");
}

// Function to greet the person
function greet(person) {
  return `Hello, ${person.firstName} ${person.lastName}!`;
}

console.log(greet(person));

console.log("Yasir ALi");