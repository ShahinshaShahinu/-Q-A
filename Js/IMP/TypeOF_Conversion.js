// Types of conversion - int, parse  implicit converstion its automatic conversion  and explisit conversion its manual
// type of conversion string conversiion boolean and number conversion  toString() toNumber() parshing intigerparshing
// parshInt converting string to parshInt  parshFloat    converting to floating point


//Implicity conversion 

var num = 5; // Number
var str = "10"; // String;
var result = num + str; // Implicitly - Converts the number to a string and concatenates them
console.log(result); // "510" 


var strNum = "42";
var num = Number(strNum); // Explicitly convert the string to a number
console.log(num); // 42

var boolStr = "true";
var bool = Boolean(boolStr); // Explicitly convert the string to a boolean
console.log(bool); // true


var zero = 0; // 0 is falsy
var boolZero = Boolean(zero); // Convert to a boolean
console.log(boolZero); // false