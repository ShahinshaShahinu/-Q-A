/* some()  is a JavaScript array method that checks if at least one element 
in the array satisfies a specified condition. It returns true if any element meets/satisfies
the condition; otherwise, it returns false. */

const numbers = [1, 2, 3, 4, 5];

// Check if any number in the array is greater than 3
const result = numbers.some((num)=>{
    return num > 3 
})
console.log(result); // Output: true
