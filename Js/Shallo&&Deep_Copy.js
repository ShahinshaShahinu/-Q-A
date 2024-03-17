/* Shallow Copy: Duplicates the structure but shares nested object references,
 allowing changes to affect the original.
Deep Copy: Duplicates the structure and all nested objects,
 ensuring changes don't affect the original.    */


/* Shallow Copy*/ 

const ShalloARr = [
  [1, 2, 3],
  [4, 5, 6],
];

// Create a shallow copy using the spread operator
const shallowCopy = [...ShalloARr];

// Modify the nested array in the shallow copy
shallowCopy[0].push("shallo copy");

console.log(ShalloARr);
console.log(shallowCopy ,'it will effect the original array or object ');

/* Deep Copy */ 

let DeepArr = [1, 2, 3, 4, 5, [3, 4, 5, 6]];

const copys = JSON.parse(JSON.stringify(DeepArr));

console.log(copys);
copys[5].push("DeepCoppy");
console.log(copys);
console.log(DeepArr ,'it will not effect the original array');












// const originalObject = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main Street",
//     city: "Anytown",
//     state: "USA",
//   },
// };

// const deepCopy = JSON.parse(JSON.stringify(originalObject));

// deepCopy.name = " jjjjjjjjjjjjjjj";
// console.log(deepCopy); 

// console.log(originalObject);