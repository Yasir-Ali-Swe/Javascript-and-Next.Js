function addNumbers(a, b) {
    return a + b;
  }  
const subtractNumbers = function (a, b) {
    return a - b;
  };
  const multiplyNumbers = (a, b) => a * b;
  function calculate(a, b, operation) {
    return operation(a, b);
  }
  (function greet() {
    console.log("Hello! This is an IIFE.");
  })();
  function doMath(a, b, callback) {
    console.log("Result:", callback(a, b));
  }
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }

  function divideNumbers(a, b = 1) {
    return a / b;
  }
  

  console.log("Addition:", addNumbers(5, 3)); 
  console.log("Subtraction:", subtractNumbers(5, 3)); 
  console.log("Multiplication:", multiplyNumbers(5, 3)); 
  
 
  console.log(
    "Higher-Order Function:",
    calculate(5, 3, (a, b) => a ** b) 
  );

  doMath(10, 5, subtractNumbers);
  
  console.log("Factorial of 5:", factorial(5));
  
  // Default Parameters
  console.log("Division (with default):", divideNumbers(10)); // Dividing by 1
  console.log("Division (with provided):", divideNumbers(10, 2));
  