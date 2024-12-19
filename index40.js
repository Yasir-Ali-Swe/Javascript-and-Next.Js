const getData = (name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name && age) {
        console.log("Fetching Data Please Wait.....");
        console.log(`Name is ${name} and Age is ${age}`);
        resolve();
      } else {
        console.log("Error Occurred");
        reject("Invalid data provided");
      }
    }, 2000);
  });
};

(async () => {
  try {
    await getData("Yasir Ali", 22);
    await getData("Ali", 21);
    await getData("Asad", 22);
  } catch (error) {
    console.error(error);
  }
})();
