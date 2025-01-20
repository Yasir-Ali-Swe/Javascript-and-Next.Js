// A function that returns a promise
function fetchData(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value) {
          resolve(`Data fetched: ${value}`);
        } else {
          reject("Error: No value provided!");
        }
      }, 1000);
    });
  }
  
  // Using Promise and Promise Chaining
  fetchData("User Data")
    .then((result) => {
      console.log(result); // Logs: Data fetched: User Data
      return fetchData("Processed Data"); // Call another promise
    })
    .then((result) => {
      console.log(result); // Logs: Data fetched: Processed Data
      return fetchData("Final Data"); // Another promise call
    })
    .then((result) => {
      console.log(result); // Logs: Data fetched: Final Data
    })
    .catch((error) => {
      console.error(error); // Handles any error in the chain
    })
    .finally(() => {
      console.log("Promise chain completed!"); // Executes regardless of success or error
    });
  