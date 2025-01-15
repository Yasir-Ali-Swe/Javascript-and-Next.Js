// Simulate an asynchronous task using a promise
function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1: Fetched a number.");
      resolve(5);
    }, 1000);
  });
}

function doubleNumber(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 2: Doubled the number to ${num * 2}.`);
      resolve(num * 2);
    }, 1000);
  });
}

function addTen(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 3: Added 10 to get ${num + 10}.`);
      resolve(num + 10);
    }, 1000);
  });
}

// Chaining the promises
getNumber()
  .then((num) => doubleNumber(num))
  .then((doubled) => addTen(doubled))
  .then((finalResult) => {
    console.log(`Final Result: ${finalResult}`);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
