// spread*You can create a copy of an array using the spread operator.
// You can merge two or more arrays into a single array using the spread operator.
// You can use the spread operator to add elements to an existing array

//Iteration method in js 

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year=[...q1,...q2,...q3,...q4] ;

console.log(year)
