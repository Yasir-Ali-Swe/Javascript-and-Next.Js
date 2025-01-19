// 1. Function Declaration
function addNumbers(a, b) {
    return a + b;
  }
  
  // 2. Function Expression
  const subtractNumbers = function (a, b) {
    return a - b;
  };
  
  // 3. Arrow Function
  const multiplyNumbers = (a, b) => a * b;
  
  // 4. Higher-Order Function (Accepts a function as an argument)
  function calculate(a, b, operation) {
    return operation(a, b);
  }
  
  // 5. IIFE (Immediately Invoked Function Expression)
  (function greet() {
    console.log("Hello! This is an IIFE.");
  })();
  
  // 6. Callback Function
  function doMath(a, b, callback) {
    console.log("Result:", callback(a, b));
  }
  
  // 7. Recursive Function
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  // 8. Default Parameters
  function divideNumbers(a, b = 1) {
    return a / b;
  }
  
  // Testing the functions
  console.log("Addition:", addNumbers(5, 3)); // Function Declaration
  console.log("Subtraction:", subtractNumbers(5, 3)); // Function Expression
  console.log("Multiplication:", multiplyNumbers(5, 3)); // Arrow Function
  
  // Using Higher-Order Function
  console.log(
    "Higher-Order Function:",
    calculate(5, 3, (a, b) => a ** b) // Power operation
  );
  
  // Using Callback Function
  doMath(10, 5, subtractNumbers);
  
  // Recursive Function
  console.log("Factorial of 5:", factorial(5));
  
  // Default Parameters
  console.log("Division (with default):", divideNumbers(10)); // Dividing by 1
  console.log("Division (with provided):", divideNumbers(10, 2));
  