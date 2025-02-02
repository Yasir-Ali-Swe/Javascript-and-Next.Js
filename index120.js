// Short Circuits
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false
// The OR operator has a lower precedence than the AND operator.
// This means that the OR operator is evaluated after the AND operator.
// For example:
console.log(true && false || true); // true

