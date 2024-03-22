// IIFE  immideatly invoked function expression  (full form aan)
// a  function is defined and invoked immediately after its declaration within the scope
// this  function has no name.
// IIFE can use  one more time 
// it is executed as soon as it is defined.

(() => {
  console.log("This is an IIFE!");
})();

(function () {
  console.log("This is an IIFE!");
})();

const iff = (function () {
  return function () {
    console.log("This is an IIFE we can call multipl time !");
  };
})();

iff();
iff();
iff();