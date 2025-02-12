
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

  fetchData("User Data")
    .then((result) => {
      console.log(result);
      return fetchData("Processed Data");
    })
    .then((result) => {
      console.log(result); 
      return fetchData("Final Data"); 
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error); // Handles any error in the chain
    })
    .finally(() => {
      console.log("Promise chain completed!"); 
    });
  