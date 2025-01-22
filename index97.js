// String Array
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// 1. Accessing Array Elements
console.log("First Fruit:", fruits[0]); // Apple
console.log("Last Fruit:", fruits[fruits.length - 1]); // Elderberry

// 2. Adding Elements
fruits.push("Fig"); // Adds at the end
fruits.unshift("Grape"); // Adds at the beginning
console.log("\nAfter Adding Elements:", fruits);

// 3. Removing Elements
fruits.pop(); // Removes last element
fruits.shift(); // Removes first element
console.log("\nAfter Removing Elements:", fruits);

// 4. Looping Through the Array
console.log("\nLooping with For Loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("\nLooping with forEach:");
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// 5. Searching in the Array
console.log("\nIndex of 'Cherry':", fruits.indexOf("Cherry")); // 2
console.log("Does the array include 'Banana'?", fruits.includes("Banana")); // true

// 6. Sorting and Reversing
const sortedFruits = [...fruits].sort(); // Sorting alphabetically
console.log("\nSorted Fruits:", sortedFruits);
console.log("Reversed Fruits:", sortedFruits.reverse());

// 7. Joining Array into a String
const fruitString = fruits.join(", ");
console.log("\nFruits as a String:", fruitString);

// 8. Slicing and Splicing
const slicedFruits = fruits.slice(1, 3); // Gets elements from index 1 to 2
console.log("\nSliced Fruits (index 1 to 3):", slicedFruits);

fruits.splice(2, 1, "Guava"); // Removes 1 element at index 2 and adds 'Guava'
console.log("After Splice:", fruits);

// 9. Mapping Array (Convert to Uppercase)
const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("\nUppercase Fruits:", uppercaseFruits);
