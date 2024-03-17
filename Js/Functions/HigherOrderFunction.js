// higher-order function that takes a function callback as an argument.
//  It performs some operations and then invokes the callback function 
// example of higer order function filter(), map(), reduce(), some(), 

function name(callback) {
    callback()
}

function onComplete() {
  console.log("Callback has been called.");
}

name(onComplete)