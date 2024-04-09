//  *Regular Functions*: 
// Defined using the function keyword followed by a function name,
// it has their own 'this 'contex ,(The 'this' context refers to the object that contains the current code.)

// *Arrow Functions* :
// Defined with => syntax
// it does not has their own 'this' context  ,Inherit/acess this from the surrounding lexical context
// constructor function () not possible to use Arrow Function 
//Lexical context defines where variables and values are accessible within a function's scope.
//implicit is automatic return ... and explicit is manual return (in arrow funciton case)

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!

const greet = (name) => {
  return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!


const person = {
  name: "John",
  greet:  ()=> {
    console.log("Hello, " + this.name + "!");  // no this context
  },
};

person.greet(); // Output: Hello, undefiened! 

const person12 = {
  name: "John",
  greet: function() {
    const innerArrowFunction = () => {
      console.log("Hello, " + this.name + "!"); // it has a this context / it has a lexical context  
    };
    innerArrowFunction();
  }
};

person12.greet(); // Output: Hello, John!
