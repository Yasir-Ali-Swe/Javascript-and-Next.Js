let promo = (complete, name) => {
  return new Promise((resolve, reject) => {
    console.log("Please wait fetching data...");
    setTimeout(() => {
      if (complete) {
        resolve(`Username is ${name}`);
      } else {
        reject("Promo is not running");
      }
    }, 2000);
  });
};
(async () => {
  console.log(await promo(true, "Yasir"));
  console.log(await promo(true, "Ali"));
  console.log(await promo(true, "Asadk"));
})();
