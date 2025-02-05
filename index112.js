
let num = 10;
if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// 2. switch
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("You selected apple."); 
        break;
    case "banana":
        console.log("You selected banana.");
        break;
    default:
        console.log("Unknown fruit.");
        break;
}


for (let i = 1; i <= 5; i++) {
    console.log("for loop iteration:", i);
}

// 4. while loop
let count = 1;
while (count <= 3) {
    console.log("while loop count:", count);
    count++;
}

// 5. do...while loop
let doCount = 1;
do {
    console.log("do...while count:", doCount);
    doCount++;
} while (doCount <= 3);


let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("for...of color:", color);
}


let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(`for...in key: ${key}, value: ${person[key]}`);
    // Output: name: John, age: 30, city: New York
}

// 8. break (exiting a loop)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Breaking the loop at 3"); // Output: Breaking the loop at 3
        break;
    }
    console.log("Looping:", i);
}

// 9. continue (skipping an iteration)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping iteration 3"); // Output: Skipping iteration 3
        continue;
    }
    console.log("Continuing loop:", i);
}

// 10. try...catch...finally (error handling)
try {
    let result = 10 / 0; // No error, but invalid operation
    console.log("Result:", result); // Output: Infinity
    throw new Error("An example error"); // Throwing a custom error
} catch (error) {
    console.log("Caught an error:", error.message); // Output: An example error
} finally {
    console.log("Finally block executed."); // Output: Finally block executed.
}

// 11. Conditional (ternary) operator
let isEven = num % 2 === 0 ? "Even" : "Odd";
console.log("Ternary operator result:", isEven); // Output: Even

// 12. Logical operators
if (num > 0 && num % 2 === 0) {
    console.log("Positive and even number"); // Output: Positive and even number
} else if (num > 0 || num % 2 === 0) {
    console.log("Either positive or even");
}

// 13. Nested control statements
for (let i = 1; i <= 2; i++) {
    console.log("Outer loop iteration:", i);
    for (let j = 1; j <= 2; j++) {
        console.log("  Inner loop iteration:", j);
    }
}
