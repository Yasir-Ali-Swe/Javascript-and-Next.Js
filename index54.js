function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data from server...");

    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance of success
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data from the server.");
      }
    }, 2000); // Simulate 2-second server delay
  });
}

// Using the promise
fetchDataFromServer()
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Fetch attempt complete.");
  });
