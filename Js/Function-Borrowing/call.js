// // function Borrowing
// // call() -- method  argument through pass the obect
// We can retrieve the object using the "this" keyword

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };
 
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);     //this keyword refers to an object.
}

greet.call(person1, "Hello"); // Output: Hello, Alice
greet.call(person2, "Hi"); // Output: Hi, Bob