// The forEach method in JavaScript iterates over each element in an array,
//  executing a callback function for each element ,
// it does not create a new array /not return new array,it does not change / modify the original array. 
// map & foreach higher-order functions 

let array = [1, 2, 3, 4, 5];
// it is a higher-order function , it takes a call back function 

array.forEach((element) => {
  console.log(element);
});
console.log(array);

array.forEach(function (number) {
  console.log(number);
});

