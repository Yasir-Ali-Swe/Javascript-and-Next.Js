let promo = (a, b) => {
  return new Promise((resolve, reject) => {
    console.log("Please wait fetching Data...");
    setTimeout(() => {
      if ((a, b)) {
        resolve("Promo is running");
      } else {
        reject("Promo is not running");
      }
    }, 2000);
  });
};
promo(1, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
