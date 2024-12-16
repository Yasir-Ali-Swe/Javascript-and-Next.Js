let promo = (isRun) => {
  return new Promise((resolve, reject) => {
    if (isRun) {
      resolve("Promo is running");
    } else {
      reject("Promo is not running");
    }
  });
};

promo(false)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// let arr = [1, 2, 3, 4, 5];
// let result = arr.every((item) => item <= 6);
// console.log(result);
