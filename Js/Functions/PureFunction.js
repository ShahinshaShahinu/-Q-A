//   A pure function always gives the same output for the same input and doesn't have 
//   any side effects or rely on external data.
// Mean -Do not modify variables outside their scope.


let tt = 0;
function sum(a, b) {
  return a + b + tt;
}
// it is not a pure function in JavaScript because it accesses a variable tt from its outer scope,
console.log(sum(10, 10));



function PureFuncitionSum(a, b) {
  return a + b 
}

console.log(PureFuncitionSum(10, 10));