// Example 1: Using nullish coalescing operator

// The nullish coalescing operator (??)
// returns its right-hand operand/value when the left-hand operand/value is null or undefined;
// otherwise, it returns the left-hand operand/value.

  

const value = null;
const result = value ?? "default";

console.log(result); // Output: "default" because value is null

console.log(null ?? 'null')