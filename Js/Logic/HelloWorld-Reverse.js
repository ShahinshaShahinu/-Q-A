let str = "hello world";
let reversedStr = "";

let word = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    word += str[i];
  } else {
    reversedStr = word + " " + reversedStr;
    word = "";
  }
}
reversedStr = word + " " + reversedStr; // Adding the last word

console.log(reversedStr.trim()); // Output: "world hello"

// let str = 'hello world';
// let words = str.split(' '); // Split the string into an array of words
// let reversedStr = words[1] + ' ' + words[0]; // Rearrange the words
// console.log(reversedStr); // Output: "world hello"
