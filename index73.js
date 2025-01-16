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

// Using async/await
async function getData() {
  try {
    console.log("Fetching data...");
    const response = await fetchData(true); // Change this to false to test rejection
    console.log(response); // Logs: "Data fetched successfully!"
    console.log("Processing data...");
  } catch (error) {
    console.error(error); // Logs: "Error: Failed to fetch data."
  } finally {
    console.log("Operation complete."); // Logs regardless of success or failure
  }
}

// Call the async function
getData();
