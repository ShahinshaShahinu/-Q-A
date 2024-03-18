// The slice() method - it does not remove any elements from original array,
// Extract a portion/part of elements from an array into a new array 

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const NewAr =  fruits.slice(1);

console.log(NewAr) ;


let array = [1, 2, 3, 4, 5];
const SeconArr = array.slice(1, 4);
console.log(SeconArr)

// fist parametr: starting the extraction from the first parameter index , including that index element 
// second parameter : The second parameter stops extraction before the index. . it will not include the index element 
