// A simple example of a promise
const fetchData = new Promise((resolve, reject) => {
  const success = true; // Simulate a condition

  if (success) {
    resolve("Data fetched successfully!"); // Fulfilled
  } else {
    reject("Failed to fetch data."); // Rejected
  }
});

// Handling the promise
fetchData
  .then((result) => {
    console.log(result); // Logs: "Data fetched successfully!"
  })
  .catch((error) => {
    console.error(error); // Logs: "Failed to fetch data."
  })
  .finally(() => {
    console.log("Promise settled."); // Logs whether fulfilled or rejected
  });
