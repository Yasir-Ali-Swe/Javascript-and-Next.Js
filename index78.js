let str = "  Hello, World!  ";

// 1. `length` - Returns the length of the string.
console.log("Length of string:", str.length);  // Output: 18

// 2. `toUpperCase()` - Converts the string to uppercase.
console.log("Uppercase:", str.toUpperCase());  // Output: "  HELLO, WORLD!  "

// 3. `toLowerCase()` - Converts the string to lowercase.
console.log("Lowercase:", str.toLowerCase());  // Output: "  hello, world!  "

// 4. `trim()` - Removes whitespace from both ends of the string.
console.log("Trimmed string:", str.trim());  // Output: "Hello, World!"

// 5. `charAt()` - Returns the character at the specified index.
console.log("Character at index 0:", str.charAt(0));  // Output: " " (space)

// 6. `includes()` - Checks if the string contains a specified substring.
console.log("Contains 'World':", str.includes("World"));  // Output: true
console.log("Contains 'JavaScript':", str.includes("JavaScript"));  // Output: false

// 7. `indexOf()` - Returns the index of the first occurrence of the specified substring.
console.log("Index of 'World':", str.indexOf("World"));  // Output: 7
console.log("Index of 'JavaScript':", str.indexOf("JavaScript"));  // Output: -1

// 8. `slice()` - Extracts a section of the string based on start and end indices.
console.log("Slice from index 2 to 10:", str.slice(2, 10));  // Output: "Hello, W"

// 9. `substring()` - Returns a substring between two specified indices.
console.log("Substring from index 2 to 10:", str.substring(2, 10));  // Output: "Hello, W"

// 10. `replace()` - Replaces the first occurrence of a substring with another string.
console.log("Replaced 'World' with 'JavaScript':", str.replace("World", "JavaScript"));  // Output: "  Hello, JavaScript!  "

// 11. `split()` - Splits the string into an array based on a specified separator.
console.log("Split by spaces:", str.split(" "));  // Output: ["", "", "Hello,", "World!", "", ""]

// 12. `concat()` - Joins two or more strings together.
console.log("Concatenated string:", str.concat(" How are you?"));  // Output: "  Hello, World!  How are you?"

// 13. `startsWith()` - Checks if the string starts with a specified substring.
console.log("Starts with '  Hello':", str.startsWith("  Hello"));  // Output: true

// 14. `endsWith()` - Checks if the string ends with a specified substring.
console.log("Ends with 'World!':", str.endsWith("World!"));  // Output: true

// 15. `repeat()` - Repeats the string a specified number of times.
console.log("Repeating string 3 times:", str.repeat(3));  // Output: "  Hello, World!    Hello, World!    Hello, World!  "

// 16. `search()` - Searches for a match between a regular expression and the string.
console.log("Search for 'World':", str.search("World"));  // Output: 7

// 17. `match()` - Returns an array of all matches (based on regular expression).
console.log("Match all 'o's:", str.match(/o/g));  // Output: ["o", "o"]

// 18. `padStart()` - Pads the string at the start to a specified length.
console.log("Padded at start:", str.padStart(20, "*"));  // Output: "***  Hello, World!  "

// 19. `padEnd()` - Pads the string at the end to a specified length.
console.log("Padded at end:", str.padEnd(20, "*"));  // Output: "  Hello, World!  ***"

// 20. `localeCompare()` - Compares two strings in a specific locale.
console.log("Comparison of 'apple' and 'banana':", "apple".localeCompare("banana"));  // Output: -1 (apple comes before banana)
