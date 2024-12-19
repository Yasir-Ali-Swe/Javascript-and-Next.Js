const getData = (name, age) => {
  setTimeout(() => {
    if ((name, age)) {
      console.log("Fetching Data Please Wait.....");
      console.log(`Name is ${name} and Age is ${age}`);
    } else {
      console.log("Error Occured");
    }
  }, 2000);
};

let callData = async () => {
  await getData("Yasir Ali", 22);
  await getData("Ali", 21);
  await getData("Asad", 22);
};
callData();
