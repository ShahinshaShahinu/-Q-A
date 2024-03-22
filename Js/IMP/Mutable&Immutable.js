//Primitive == Immutable || Non-PRimitive == Mutable == Changeable
// Primitive data types in JavaScript represent single values and are immutable
// meaning their values cannot be changed once they are created
// Non-primitive datas are mutable 
//  which means their values can be modified after creation. 

// *immutable_Primitive* :- Strings ,
// *mutable Non-Primitive* :-Arrays, object ,function

// Strings are immutable Primitive

let str = "Hello";
str[0] = "h"; // This won't modify the string
console.log(str); // Output: "Hello"

// Arrays are mutable Non-Primitive

let arr = [1, 2, 3];
arr.push(4); // Modifies the array
console.log(arr); // Output: [1, 2, 3, 4]

let obj={
    name:'shahinsha'
}
obj.name='asslam' 
console.log(obj) 

// function are Mutable and Non-Primitive 
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


