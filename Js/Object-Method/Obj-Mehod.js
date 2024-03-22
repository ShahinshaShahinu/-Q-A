// JavaScript Object Methods
//  the this keyword refers to an object.
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// Accessing Object Methods 
// objectName.methodName() 
var names = person.fullName();
console.log(names)
var names = person.firstName;
console.log(names)

// Built-In Methods 
//  toUpperCase() method of the String object, to convert a text to uppercase:
let message = "Hello world!";
let x = message.toUpperCase();
console.log(x)