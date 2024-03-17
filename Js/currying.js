/*Currying in JavaScript involves converting a function with multiple arguments
  into a sequence of functions, each  taking  one or more arguments */

function curry_ArrowFN(a) {
    return (b)=>{
        return (c,k)=>{
            return (d)=>{
                return `${a},${b},${c}, ${k} ,${d}`
            }
        }
    }
}

console.log(curry_ArrowFN('hello')(' my ')(' aname  ','none')(' is '));

// // call back currying 

function onComplete() {
  console.log("Callback has been called                           .");
}

function cury_Call(a){
    return function(callback){
        callback();
        console.log(a)
        return a
    }
}
console.log(cury_Call('hello -')(onComplete),'-Currying returned a ');

// currying using function as a keyword 

function currRR(a) {
  return function (b, k) {
    return function (c) {
      console.log( a, b, c );
      return { a, b, k, c };
    };
  };
}

console.log(currRR("hello ")("irshad ", "jjjj")("alike "));