// reduce() method in JavaScript -
// iterates over each element in an array , executing a callback function for each element ,
//  accumulate a single value. it will return a single value."
// it is a higher-order function , it takes a call back function 

// The accumulator is a variable that accumulates/store the sum of all elements ,when iterate the elements
// currentvalue :-  each element of the array during each iteration of the reduce() function. 


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => {
     
      return accumulator + currentValue; // Return the updated accumulator value
  }, 0); // Initial value of the accumulator is 0 ,Not mandatory
console.log(sum); // Output: 15





// The 0 passed as the second argument to reduce() is the initial value of the accumulator.




// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   console.log(accumulator, "accume");
//   console.log(currentValue, "current value");
//   return accumulator + currentValue;
// });
// console.log(sum);
