// he find() method returns the first element that satisfies a condition or
// it is undefined if no match is found.

let ar = [1, 2, 2, 2, 2, 23];
console.log(ar.find((i) => i >= 23));

console.log(ar.find((i)=>
    i==2
))