 const exicute_Sum=(callback)=>{
   return callback(10,20)
}
function sum(a,b){
    console.log("Callback has been called.");
    return a+b
}

let value=exicute_Sum(sum);
console.log(value); 

// callback hell 

function sum(a,b,callback) {
    callback(a+b)
}

function multiply(a,b,callback){
  callback(a*b)
}

function div(a,b,callback){
  callback(a/b)
}

sum(1,2,function result(res){
    console.log(res);
    multiply(1,2,(res)=>{
      console.log(res);
      div(1,2,(res)=>{
        console.log(res);
      })
    })
})