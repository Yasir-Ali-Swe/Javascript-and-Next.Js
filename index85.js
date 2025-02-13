console.log("Starting setTimeout...");

setTimeout(() => {
  console.log("This message is displayed after 3 seconds (setTimeout).");
}, 3000); 


console.log("Starting setInterval...");

let counter = 1;
const intervalId = setInterval(() => {
  console.log(`Interval message ${counter}: This is displayed every 2 seconds.`);
  counter++;


  if (counter > 5) {
    clearInterval(intervalId); 
    console.log("setInterval stopped after 5 iterations.");
  }
}, 2000); 

console.log("Waiting for setTimeout and setInterval...");
