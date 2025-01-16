// Simulating a function that returns a promise
function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error: Failed to fetch data.");
      }
    }, 2000); // Simulates a 2-second delay
  });
}

// Using the promise
fetchData(true) // Change this to false to test rejection
  .then((response) => {
    console.log(response); // Will log: "Data fetched successfully!"
    return "Processing data...";
  })
  .then((message) => {
    console.log(message); // Will log: "Processing data..."
  })
  .catch((error) => {
    console.error(error); // Will log: "Error: Failed to fetch data."
  })
  .finally(() => {
    console.log("Operation complete."); // Will log regardless of success or failure
  });
