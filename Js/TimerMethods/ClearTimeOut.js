// Example of clearTimeout
var timeoutId = setTimeout(function () {
  console.log("This message won't be logged due to clearTimeout.");
}, 1000);

clearTimeout(timeoutId); // Cancels the timeout
