let promise = (name, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((name, age)) {
        resolve(`Name is ${name} and Age is ${age}`);
      } else {
        reject("Error Occured");
      }
    }, 2000);
  });
};
promise("Yasir Ali", 22)
  .then((result) => {
    console.log(result);
    return `Modified : ${result}`;
  })
  .then((result) => {
    console.log(result);
    return result.toUpperCase();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
