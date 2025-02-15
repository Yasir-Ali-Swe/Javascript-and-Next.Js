
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];


console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);


fruits.push("Fig");
fruits.unshift("Grape");
console.log("\nAfter Adding Elements:", fruits);


fruits.pop();
fruits.shift();
console.log("\nAfter Removing Elements:", fruits);


console.log("\nLooping with For Loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("\nLooping with forEach:");
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});


console.log("\nIndex of 'Cherry':", fruits.indexOf("Cherry"));
console.log("Does the array include 'Banana'?", fruits.includes("Banana")); 


const sortedFruits = [...fruits].sort();
console.log("\nSorted Fruits:", sortedFruits);
console.log("Reversed Fruits:", sortedFruits.reverse());


const fruitString = fruits.join(", ");
console.log("\nFruits as a String:", fruitString);


const slicedFruits = fruits.slice(1, 3);
console.log("\nSliced Fruits (index 1 to 3):", slicedFruits);

fruits.splice(2, 1, "Guava");
console.log("After Splice:", fruits);


const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("\nUppercase Fruits:", uppercaseFruits);
