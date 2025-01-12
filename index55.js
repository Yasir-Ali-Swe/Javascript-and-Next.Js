function fetchData(callback) {
  console.log("Fetching data...");

  // Simulate a 2-second delay
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" }; // Simulated data
    console.log("Data fetched.");
    callback(data); // Call the callback function
  }, 2000);
}

function displayData(data) {
  console.log("Displaying data:", data);
}

// Call fetchData and pass displayData as the callback
fetchData(displayData);
