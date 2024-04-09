//"Object literals provide a simple way to define objects in JavaScript,
//  using key-value pairs to define properties and methods

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
