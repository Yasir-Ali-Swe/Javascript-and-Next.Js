let fetchData = (name, age) => {
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
    await fetchData("Yasir Ali", 22);
    await fetchData("Ali", 21);
    await fetchData("Asad", 22);
  } catch (error) {
    console.error(error);
  }
})();
