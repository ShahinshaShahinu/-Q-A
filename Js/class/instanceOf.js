// instanceof operator that allows we to check whether an object is an
//  instance of a specific class or constructor function. 
//The instanceof operator returns a boolean value (true or false) based on the evaluation.

class ONe {
  constructor(name) {
    this.name = name;
  }
}

class Two {
  constructor(name) {
    this.name = name;
  }
}

// Create an instance of the Person class

const person = new Two("John");

console.log(person instanceof ONe);


