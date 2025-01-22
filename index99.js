// Function that returns a Promise
function fetchData(value, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value) {
          resolve(`Fetched: ${value}`);
        } else {
          reject("Error: No value provided");
        }
      }, delay);
    });
  }
  
  // Using Promise Chaining
  console.log("Promise Chaining:");
  fetchData("Data 1", 1000)
    .then(result => {
      console.log(result);
      return fetchData("Data 2", 1000); // Chaining another promise
    })
    .then(result => {
      console.log(result);
      return fetchData(null, 1000); // Simulating an error
    })
    .catch(error => {
      console.error(error); // Catching the error
    })
    .finally(() => {
      console.log("Promise chain complete\n");
    });
  
  // Using Async/Await
  async function fetchAllData() {
    console.log("Async/Await:");
    try {
      const data1 = await fetchData("Async Data 1", 1000);
      console.log(data1);
  
      const data2 = await fetchData("Async Data 2", 1000);
      console.log(data2);
  
      // Simulating an error
      const data3 = await fetchData(null, 1000);
      console.log(data3);
    } catch (error) {
      console.error(error); // Handling the error
    } finally {
      console.log("Async/Await process complete");
    }
  }
  
  // Calling the async function
  fetchAllData();
  