
// - It'll excute a fuction after current event loop finishes 

setImmediate(function() {
  console.log('Inside setImmediate callback');
});

process.nextTick(function () {
  console.log("Inside process.nextTick callback");
});  



// it means process.nextTick has priority more than setImmediate() 

