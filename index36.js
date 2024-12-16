let promo = (name) => {
  return new Promise((resolve, reject) => {
    console.log("Please waite fetching data...");
    setTimeout(() => {
      if (name) {
        resolve(`Name is ${name}`);
      } else {
        reject(`Name is not ${name}`);
      }
    }, 2000);
  });
};
promo("Yasir Ali")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
