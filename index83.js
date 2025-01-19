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
  
  // Using Promise chaining
  function promiseChainingExample() {
    console.log("Starting Promise chaining...");
    fetchData("Step 1")
      .then((result1) => {
        console.log(result1);
        return fetchData("Step 2");
      })
      .then((result2) => {
        console.log(result2);
        return fetchData("Step 3");
      })
      .then((result3) => {
        console.log(result3);
        console.log("Promise chaining completed!");
      })
      .catch((error) => {
        console.error("Promise Rejected in chain:", error);
      })
      .finally(() => {
        console.log("Promise chain finished.");
      });
  }
  
  // Using async/await
  async function asyncAwaitExample() {
    try {
      console.log("Starting async/await...");
      const result1 = await fetchData("Step 1");
      console.log(result1);
  
      const result2 = await fetchData("Step 2");
      console.log(result2);
  
      const result3 = await fetchData("Step 3");
      console.log(result3);
  
      console.log("Async/await completed!");
    } catch (error) {
      console.error("Error in async/await:", error);
    } finally {
      console.log("Async/await finished.");
    }
  }
  
  // Call both examples
  promiseChainingExample();
  setTimeout(() => {
    asyncAwaitExample();
  }, 5000); // Delay the async/await example to separate the output
  