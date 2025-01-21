function methodsDemo() {
    // Array Methods
    console.log("Array Methods:");
    const arr = [10, 20, 30, 40];
    console.log("Original Array:", arr);

    console.log("Push:", arr.push(50), arr); // Add to end
    console.log("Pop:", arr.pop(), arr); // Remove from end
    console.log("Shift:", arr.shift(), arr); // Remove from start
    console.log("Unshift:", arr.unshift(5), arr); // Add to start
    console.log("Map:", arr.map(x => x * 2)); // Double each value
    console.log("Filter:", arr.filter(x => x > 20)); // Filter values > 20
    console.log("Reduce:", arr.reduce((sum, x) => sum + x, 0)); // Sum all values
    console.log("Find:", arr.find(x => x > 20)); // Find first value > 20
    console.log("Sort:", arr.sort((a, b) => b - a)); // Sort descending
    console.log("Includes:", arr.includes(20)); // Check if 20 exists

    // String Methods
    console.log("\nString Methods:");
    const str = "Hello, JavaScript!";
    console.log("Original String:", str);

    console.log("Length:", str.length); // Length of string
    console.log("Slice:", str.slice(0, 5)); // Extract "Hello"
    console.log("ToUpperCase:", str.toUpperCase()); // Convert to uppercase
    console.log("ToLowerCase:", str.toLowerCase()); // Convert to lowercase
    console.log("Replace:", str.replace("JavaScript", "World")); // Replace text
    console.log("Split:", str.split(" ")); // Split into array by space
    console.log("Trim:", "  extra space  ".trim()); // Remove extra spaces
    console.log("IndexOf:", str.indexOf("JavaScript")); // Find index of substring
    console.log("Substring:", str.substring(7, 17)); // Extract "JavaScript"

    // Math Methods
    console.log("\nMath Methods:");
    console.log("PI:", Math.PI); // Value of Pi
    console.log("Round:", Math.round(4.6)); // Round to nearest integer
    console.log("Floor:", Math.floor(4.6)); // Round down
    console.log("Ceil:", Math.ceil(4.3)); // Round up
    console.log("Max:", Math.max(10, 20, 30)); // Find maximum value
    console.log("Min:", Math.min(10, 20, 30)); // Find minimum value
    console.log("Random (0-1):", Math.random()); // Random number between 0 and 1
    console.log("Square Root:", Math.sqrt(16)); // Square root of 16
    console.log("Power:", Math.pow(2, 3)); // 2 to the power of 3
}

methodsDemo();
