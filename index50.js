let prom = (complete) => {
  return new Promise((resolve, reject) => {
    if (complete) {
      resolve("Promise completed");
    } else {
      reject("Promise not completed");
    }
  });
};
let fullfill = (result) => {
  console.log(result);
};
let onReject = (error) => {
  console.log(error);
};
prom(true).then(fullfill);
prom(false).catch(onReject);
