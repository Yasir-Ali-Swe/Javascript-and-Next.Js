// Function that returns a promise
function fetchData(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value) {
          resolve(`Data fetched: ${value}`);
        } else {
          reject("Error: No value provided");
        }
      }, 1000);
    });
  }
  
  // Promise chaining example
  fetchData("Step 1")
    .then((result1) => {
      console.log(result1);
      return fetchData("Step 2"); // Chaining the next promise
    })
    .then((result2) => {
      console.log(result2);
      return fetchData("Step 3"); // Another chained promise
    })
    .then((result3) => {
      console.log(result3);
      console.log("All steps completed!");
    })
    .catch((error) => {
      console.error("Promise Rejected:", error); // Catching errors
    })
    .finally(() => {
      console.log("Promise chain completed, with or without errors.");
    });
  