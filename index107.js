
// 1. If-else statement
let number = 5;
if (number > 0) {
    console.log("Positive number");
} else if (number < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// 2. Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Tuesday":
        console.log("Second day");
        break;
    case "Friday":
        console.log("Weekend is near");
        break;
    default:
        console.log("Other day");
        break;
}

// 3. Ternary operator
let age = 18;
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult);  // "Adult"

// 4. For loop
console.log("\nFor loop:");
for (let i = 0; i < 3; i++) {
    console.log(i); // Prints 0 to 2
}

// 5. While loop
console.log("\nWhile loop:");
let count = 0;
while (count < 3) {
    console.log(count); // Prints 0 to 2
    count++;
}

// 6. Do-while loop
console.log("\nDo-While loop:");
let index = 0;
do {
    console.log(index); // Prints 0
    index++;
} while (index < 2);

// 7. Break statement (Exiting a loop early)
console.log("\nUsing break in a loop:");
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Exit the loop when i is 3
    }
    console.log(i); // Prints 0, 1, 2
}

// 8. Continue statement (Skip an iteration in a loop)
console.log("\nUsing continue in a loop:");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip when i is 2
    }
    console.log(i); // Prints 0, 1, 3, 4
}

// 9. Try-catch block (Exception handling)
console.log("\nTry-catch block:");
try {
    let result = 10 / 0;
    if (result === Infinity) {
        throw new Error("Division by zero error");
    }
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);  // "Error: Division by zero error"
}

// 10. Throw statement (Throw custom error)
console.log("\nThrow statement:");
function checkEven(number) {
    if (number % 2 !== 0) {
        throw new Error("Not an even number");
    }
    console.log("Even number");
}

try {
    checkEven(3);
} catch (error) {
    console.log(error.message); // "Not an even number"
}
