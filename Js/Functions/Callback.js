// Callback: A function that is passed as an argument to another 
// function and is called later within that function.

const exicute_Sum = (callback) => {
  return callback(10, 20);
};
function sum(a, b) {
  console.log("Callback has been called.");
  return a + b;
}

let value = exicute_Sum(sum);
console.log(value);
