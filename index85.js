console.log("Starting setTimeout...");

setTimeout(() => {
  console.log("This message is displayed after 3 seconds (setTimeout).");
}, 3000); 

// setInterval Example
console.log("Starting setInterval...");

let counter = 1;
const intervalId = setInterval(() => {
  console.log(`Interval message ${counter}: This is displayed every 2 seconds.`);
  counter++;

  // Stop the interval after 5 iterations
  if (counter > 5) {
    clearInterval(intervalId); // Stops the interval
    console.log("setInterval stopped after 5 iterations.");
  }
}, 2000); // Executes every 2000 milliseconds (2 seconds)

console.log("Waiting for setTimeout and setInterval...");
