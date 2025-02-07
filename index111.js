
let name = "John Doe";
console.log("String:", name); 


let age = 25;
console.log("Number:", age); 


let isStudent = true;
console.log("Boolean:", isStudent); 


let address;
console.log("Undefined:", address); 

let middleName = null;
console.log("Null:", middleName);
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isStudent: true,
};
console.log("Object:", person);
let colors = ["red", "green", "blue"];
console.log("Array:", colors);
let userCity = prompt("Enter your city:");
console.log("City entered by user:", userCity);


const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Enter your favorite hobby: ", (hobby) => {
    console.log("Hobby entered by user:", hobby);


    console.log(`Hello ${name}, you are ${age} years old and love ${hobby}.`);


    let strNumber = "100";
    let convertedNumber = Number(strNumber);
    console.log("Converted Number:", convertedNumber); 


    let dynamicVar = 123;
    console.log("Dynamic Typing (Number):", dynamicVar); 
    dynamicVar = "Now a string!";
    console.log("Dynamic Typing (String):", dynamicVar);
    console.log("Type of age:", typeof age);
    console.log("Type of isStudent:", typeof isStudent); 


    alert(`Thanks for sharing! Your hobby is ${hobby}.`);


    readline.close();
});
