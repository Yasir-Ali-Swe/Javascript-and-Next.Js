function step1() {
  return new Promise((resolve) => {
    console.log("Step 1: Preparing ingredients...");
    setTimeout(() => {
      resolve("Ingredients ready");
    }, 1000);
  });
}

function step2(previousResult) {
  return new Promise((resolve) => {
    console.log(`Step 2: Cooking... (${previousResult})`);
    setTimeout(() => {
      resolve("Meal cooked");
    }, 1500);
  });
}

function step3(previousResult) {
  return new Promise((resolve) => {
    console.log(`Step 3: Serving... (${previousResult})`);
    setTimeout(() => {
      resolve("Meal served");
    }, 1000);
  });
}

// Chain the promises
step1()
  .then((result1) => step2(result1))
  .then((result2) => step3(result2))
  .then((finalResult) => {
    console.log(`Done! ${finalResult}`);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
