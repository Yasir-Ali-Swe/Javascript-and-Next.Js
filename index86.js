// Variables
let name = "Yasir"; // String
const age = 21; // Number
var isStudent = true; // Boolean

// Function
function greet(person) {
  return `Hello, ${person}! Welcome to JavaScript Basics.`;
}

// Conditional
if (isStudent && age < 25) {
  console.log(greet(name));
} else {
  console.log("You're not a student or too old for this example!");
}

// Loop
for (let i = 1; i <= 5; i++) {
  console.log(`Counting: ${i}`);
}

// Event Listener (For a button in HTML: <button id="myButton">Click Me</button>)
document.getElementById("myButton")?.addEventListener("click", function () {
  alert("Button clicked! 🚀");
});

// Array and Iteration
const numbers = [10, 20, 30, 40, 50];
numbers.forEach((num) => console.log(`Number: ${num}`));

// Object
const user = {
  username: "YasirAli",
  role: "Developer",
  greet: function () {
    console.log(`Hi, I'm ${this.username} and I'm a ${this.role}.`);
  },
};

user.greet(); // Calling object method
