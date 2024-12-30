let promo = (complete) => {
  return new Promise((resolve, reject) => {
    console.log("Please wait fetching data...");
    setTimeout(() => {
      if (complete) {
        resolve("Promo is running");
      } else {
        reject("Promo is not running");
      }
    }, 2000);
  });
};

let onFullFill = (result) => {
  console.log(result);
};

let onReject = (error) => {
  console.log(error);
};
promo(true).then(onFullFill);
promo(false).catch(onReject);
