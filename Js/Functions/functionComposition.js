/*  Function composition is combining multiple functions to create a new function. 
  The output of one function becomes the input of the next function .
  */

// Functions to compose
function addTwo(x) {
    return x + 2;
}

function multiplyByThree(x) {
    return x * 3;
}

// Function composition
function compose(func1, func2) {
    return function(x) {
        return func1(func2(x));
    };
}

// Composed function
const addTwoThenMultiplyByThree = compose(multiplyByThree, addTwo);

// Usage
console.log(addTwoThenMultiplyByThree(4)); // Output: (4 + 2) * 3 = 18
