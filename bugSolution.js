function foo(a, b) {
  // Check if either a or b is falsy (including null, 0, "", false)
  if (!a || !b) {
    // Handle falsy values - return 0, throw an error, or use another strategy
    return 0; // Or throw new Error('Invalid input: a and b must be numbers');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(0, 2)); // Output: 0
console.log(foo(1, 0)); // Output: 0
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(0, 0)); //Output: 0