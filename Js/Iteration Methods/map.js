//  The Map method in JavaScript iterates over each element in an array 
// executing a callback function for each element
//  it will create a new array ,it does not change the original array.
// map & foreach higher-order functions 

let array = [1, 2, 3, 4, 5]; 
// call back function 
array.map((elem)=>{
    console.log(elem);
})

const doubledNumbers = array.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers)

// it is a higher-order function , it takes a call back function 