// For Loop
function printNumbersWithForLoop() {
    for (let i = 1; i <= 5; i++) {
      console.log("For Loop:", i);
    }
  }
  
  // While Loop
  function printNumbersWithWhileLoop() {
    let i = 1;
    while (i <= 5) {
      console.log("While Loop:", i);
      i++;
    }
  }
  
  // Do-While Loop
  function printNumbersWithDoWhileLoop() {
    let i = 1;
    do {
      console.log("Do-While Loop:", i);
      i++;
    } while (i <= 5);
  }
  
  // For...of Loop (Array)
  function printArrayWithForOfLoop(arr) {
    for (const item of arr) {
      console.log("For...of Loop:", item);
    }
  }
  
  // For...in Loop (Object)
  function printObjectWithForInLoop(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`For...in Loop: ${key} = ${obj[key]}`);
      }
    }
  }
  
  // Test the loops
  printNumbersWithForLoop();
  printNumbersWithWhileLoop();
  printNumbersWithDoWhileLoop();
  
  const sampleArray = [10, 20, 30, 40];
  printArrayWithForOfLoop(sampleArray);
  
  const sampleObject = { name: "Yasir", age: 22, course: "Software Engineering" };
  printObjectWithForInLoop(sampleObject);
  