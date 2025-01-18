// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // Base case: 0! and 1! are both 1
    }
    return n * factorial(n - 1);  // Recursive case
}

// Example usage
let num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`);
