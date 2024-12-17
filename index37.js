let promse = (name, age) => {
  return new Promise((resolve, reject) => {
    console.log("Fetching Data.....");
    setTimeout(() => {
      if ((name, age)) {
        resolve(`Name is ${name} and Age is ${age}`);
      } else {
        reject("Please provide valid data.");
      }
    }, 2000);
  });
};

promse("Yasir", 22)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
