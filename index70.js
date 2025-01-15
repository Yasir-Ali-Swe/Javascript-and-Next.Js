// Function to print the multiplication table for a given number
function printMultiplicationTable(number) {
  console.log(`Multiplication Table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

// Call the function with a number
printMultiplicationTable(5);
