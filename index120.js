// Short Circuits
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false
// The OR operator has a lower precedence than the AND operator.
// This means that the OR operator is evaluated after the AND operator.
// For example:
console.log(true && false || true); // true
// The above expression is evaluated as follows:
// 1. true && false = false
// 2. false || true = true
// Therefore, the final result is true.
