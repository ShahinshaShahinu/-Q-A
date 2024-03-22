// Number Primitive .. 
let num = 5;
let num2 = num;  // assigned the reference only 

console.log("Original value:", num); // Output: Original value: 5

// Attempting to modify the value of num2
num2 = 10;

console.log("Modified value of num2:", num2); // Output: Modified value of num2: 10
console.log("Original value:", num); // Output: Original value: 5 (remains unchanged)


/* function are Mutable and Non-Primitive  */ 

// Original function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

// Mutable behavior - reassigning the function
greet = function(name) {
    return `Hola, ${name}!`; // Spanish greeting
};

console.log(greet("Bob")); // Output: Hola, Bob!