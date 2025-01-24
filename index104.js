// Simulate an asynchronous task with a Promise
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Change this to false to simulate an error
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 2000);
    });
  }
  
  // Using Promises with .then and .catch
  console.log("Using Promises:");
  fetchDataPromise()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Simulate an asynchronous task with async/await
  async function fetchDataAsync() {
    try {
      console.log("\nUsing async/await:");
      const data = await fetchDataPromise(); // Wait for the Promise to resolve
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the async function
  fetchDataAsync();
  
  // Combining Promises and async/await
  function fetchMoreData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("More data fetched!");
      }, 1000);
    });
  }
  
  async function fetchAllData() {
    try {
      console.log("\nFetching all data:");
      const data1 = await fetchDataPromise();
      console.log(data1);
  
      const data2 = await fetchMoreData();
      console.log(data2);
  
      console.log("All data fetched!");
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchAllData();
  