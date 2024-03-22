// Hoisting is JavaScript's default behavior of moving  variable or  function  declarations to the
//  top of the scope before code execution. ,   variable or function  declared befor using  it


 x = 5;

 console.log(x);
 var x;

 console.log(x);

myFunction(); // This works
function myFunction() {
  console.log("Hello, world!");
}

console.log(y); // Throws a ReferenceError
let y = 10;
