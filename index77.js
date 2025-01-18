// Example number
let num = 25;
let negativeNum = -10;

// 1. `Math.abs()` - Returns the absolute value of a number.
console.log("Absolute value of -10:", Math.abs(negativeNum));  // Output: 10

// 2. `Math.ceil()` - Returns the smallest integer greater than or equal to a given number.
console.log("Ceiling of 4.2:", Math.ceil(4.2));  // Output: 5

// 3. `Math.floor()` - Returns the largest integer less than or equal to a given number.
console.log("Floor of 4.7:", Math.floor(4.7));  // Output: 4

// 4. `Math.round()` - Rounds a number to the nearest integer.
console.log("Rounded value of 4.5:", Math.round(4.5));  // Output: 5

// 5. `Math.max()` - Returns the largest of zero or more numbers.
console.log("Maximum value of 1, 5, 10:", Math.max(1, 5, 10));  // Output: 10

// 6. `Math.min()` - Returns the smallest of zero or more numbers.
console.log("Minimum value of 1, 5, 10:", Math.min(1, 5, 10));  // Output: 1

// 7. `Math.pow()` - Returns the base raised to the exponent power (base^exponent).
console.log("2 raised to the power of 3:", Math.pow(2, 3));  // Output: 8

// 8. `Math.sqrt()` - Returns the square root of a number.
console.log("Square root of 25:", Math.sqrt(num));  // Output: 5

// 9. `Math.random()` - Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
console.log("Random number between 0 and 1:", Math.random());  // Output: Random value between 0 and 1

// 10. `Math.trunc()` - Returns the integer part of a number, truncating any decimal.
console.log("Truncated value of 4.9:", Math.trunc(4.9));  // Output: 4

// 11. `Math.sin()` - Returns the sine of an angle (in radians).
console.log("Sine of 90 degrees (converted to radians):", Math.sin(Math.PI / 2));  // Output: 1

// 12. `Math.cos()` - Returns the cosine of an angle (in radians).
console.log("Cosine of 0 radians:", Math.cos(0));  // Output: 1

// 13. `Math.tan()` - Returns the tangent of an angle (in radians).
console.log("Tangent of 45 degrees (converted to radians):", Math.tan(Math.PI / 4));  // Output: 1

// 14. `Math.log()` - Returns the natural logarithm (base e) of a number.
console.log("Natural logarithm of 10:", Math.log(10));  // Output: 2.302585092994046

// 15. `Math.log10()` - Returns the base-10 logarithm of a number.
console.log("Base 10 logarithm of 100:", Math.log10(100));  // Output: 2

// 16. `Math.exp()` - Returns Euler's number raised to the power of a given number.
console.log("e^2 (Euler's number raised to power 2):", Math.exp(2));  // Output: 7.3890560989306495

// 17. `Math.sign()` - Returns the sign of a number (1 for positive, -1 for negative, 0 for zero).
console.log("Sign of -5:", Math.sign(negativeNum));  // Output: -1

// 18. `Math.imul()` - Returns the result of a 32-bit multiplication.
console.log("32-bit multiplication of 2 and 3:", Math.imul(2, 3));  // Output: 6

// 19. `Math.clz32()` - Returns the number of leading zero bits in the 32-bit integer representation of a number.
console.log("Number of leading zeros in 5:", Math.clz32(5));  // Output: 29

// 20. `Math.fround()` - Returns the closest single precision float representation of a number.
console.log("Single precision float of 4.7:", Math.fround(4.7));  // Output: 4.699999809265137
