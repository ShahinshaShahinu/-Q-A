// Example of process.nextTick
console.log("Start");

process.nextTick(function () {
  console.log("Inside process.nextTick callback");
});

console.log("End");
