// Variables
let name = "John Doe";
let age = 25;
let isStudent = true;
let address = null;
let user = undefined;

// Data Types
console.log(typeof name); // String
console.log(typeof age); // Number
console.log(typeof isStudent); // Boolean
console.log(typeof address); // Object
console.log(typeof user); // Undefined

// Operators
console.log(5 + 5); // 10
console.log(10 - 2); // 8
console.log(4 * 4); // 16
console.log(8 / 2); // 4
console.log(7 % 3); // 1
console.log(7 ** 2); // 49

// Control Flow
if (isStudent) {
    console.log("You are a student");
} else {
    console.log("You are not a student");
}

// Functions
function greetUser(name) {
    console.log(`Hello, ${name}`);
}
greetUser("John Doe");

// Arrays
let colors = ["red", "green", "blue"];
console.log(colors[0]); // red
console.log(colors.length); // 3

// Objects
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car.brand); // Toyota
console.log(car["model"]); // Corolla
console.log(car.year); // 2020

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 to 4
}

let count = 0;
while (count < 3) {
    console.log(count); // 0 to 2
    count++;
}

let doCount = 0;
do {
    console.log(doCount); // 0 to 2
    doCount++;
} while (doCount < 3);

// DOM
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
    alert("Button clicked!");
});

// Events
const input = document.getElementById("myInput");
input.addEventListener("input", function () {
    console.log("Input changed!");
});

// Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const john = new Person("John Doe", 25);
john.greet(); // Hello, my name is John Doe and I am 25 years old.

// Inheritance
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    greet() {
        super.greet();
        console.log(`I am majoring in ${this.major}.`);
    }
}

const alice = new Student("Alice Doe", 22, "Computer Science");
alice.greet(); // Hello, my name is Alice Doe and I am 22 years old. I am majoring in Computer Science.

// Async/Await
async function fetchData() {
    const response = await fetch("https://example.com/data.json");
    const data = await response.json();
    console.log(data);
}

fetchData();

