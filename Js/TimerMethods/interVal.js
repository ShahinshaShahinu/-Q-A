// Example of setInterval

setInterval(() => {
    console.log('set iNveral exicute repeatedy after a specified intervals ')
}, 1000);



var counter = 0;
var intervalId = setInterval(function () {
  console.log("Counter: " + counter);
  counter++;
  if (counter === 5) {
    clearInterval(intervalId); // Stops the interval when counter reaches 5
  }
}, 1000); // Executes every 1 second
