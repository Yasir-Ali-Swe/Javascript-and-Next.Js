function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step 1: Data fetched!");
    }, 1000); // Simulate a 1-second delay
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${data} -> Step 2: Data processed!`);
    }, 1000); // Simulate a 1-second delay
  });
}

function saveData(processedData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${processedData} -> Step 3: Data saved!`);
    }, 1000); // Simulate a 1-second delay
  });
}

// Chaining Promises
fetchData()
  .then((data) => {
    console.log(data); // Logs: "Step 1: Data fetched!"
    return processData(data);
  })
  .then((processedData) => {
    console.log(processedData); // Logs: "Step 1: Data fetched! -> Step 2: Data processed!"
    return saveData(processedData);
  })
  .then((finalResult) => {
    console.log(finalResult); // Logs: "Step 1: Data fetched! -> Step 2: Data processed! -> Step 3: Data saved!"
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  })
  .finally(() => {
    console.log("All steps are done.");
  });
