
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

    // 8. Template Literal (String interpolation)
    console.log(`Hello ${name}, you are ${age} years old and love ${hobby}.`);

    // 9. Type Conversion
    let strNumber = "100";
    let convertedNumber = Number(strNumber);
    console.log("Converted Number:", convertedNumber); // Output: 100

    // 10. Dynamic Typing
    let dynamicVar = 123;
    console.log("Dynamic Typing (Number):", dynamicVar); // Output: 123
    dynamicVar = "Now a string!";
    console.log("Dynamic Typing (String):", dynamicVar); // Output: "Now a string!"

    // 11. typeof operator
    console.log("Type of age:", typeof age); // Output: number
    console.log("Type of isStudent:", typeof isStudent); // Output: boolean

    // 12. Output using alert (for browsers)
    alert(`Thanks for sharing! Your hobby is ${hobby}.`);

    // Closing the readline interface
    readline.close();
});
