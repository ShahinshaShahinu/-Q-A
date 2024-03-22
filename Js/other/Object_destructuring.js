// Object with properties

// Object destructuring  Object destructuring in JavaScript  is 
// extracting specific properties from object and assigning them to variables 
// more conveniently and efficiently.

const person = {
  name: "John Doe",
  age: 30,
  country: "USA",
};

// Destructuring the object
const { name, age, country } = person;

// Using the extracted variables
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(country); // Output: USA
