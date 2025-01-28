// All types of loops in JavaScript

// 1. for loop (basic counting loop)
console.log("1. for loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i); // Output: 1, 2, 3, 4, 5
}

// 2. while loop (looping with condition)
console.log("\n2. while loop:");
let count = 1;
while (count <= 3) {
    console.log("Count:", count); // Output: 1, 2, 3
    count++;
}

// 3. do...while loop (executes at least once)
console.log("\n3. do...while loop:");
let doCount = 1;
do {
    console.log("Do Count:", doCount); // Output: 1, 2, 3
    doCount++;
} while (doCount <= 3);

// 4. for...of loop (iterating over iterable objects like arrays)
console.log("\n4. for...of loop:");
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Color:", color); // Output: red, green, blue
}

// 5. for...in loop (iterating over object properties)
console.log("\n5. for...in loop:");
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
    // Output: name: John, age: 30, city: New York
}

// 6. Infinite loop (use with caution, intentionally commented out)
// Uncomment the below code to test an infinite loop (remember to stop it manually)
// console.log("\n6. Infinite loop:");
// while (true) {
//   console.log("This will run forever!");
// }

// 7. Nested loops (loop within a loop)
console.log("\n7. Nested loops:");
for (let i = 1; i <= 2; i++) {
    console.log("Outer Loop Iteration:", i);
    for (let j = 1; j <= 3; j++) {
        console.log("  Inner Loop Iteration:", j);
    }
}

// 8. Loop with break (exits the loop prematurely)
console.log("\n8. Loop with break:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Breaking the loop at:", i); // Output: Breaking the loop at: 3
        break;
    }
    console.log("Value:", i); // Output: 1, 2
}

// 9. Loop with continue (skips an iteration)
console.log("\n9. Loop with continue:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping iteration:", i); // Output: Skipping iteration: 3
        continue;
    }
    console.log("Value:", i); // Output: 1, 2, 4, 5
}

// 10. Looping over strings
console.log("\n10. Looping over a string:");
let word = "JavaScript";
for (let char of word) {
    console.log("Character:", char); // Output: Each character of "JavaScript"
}
