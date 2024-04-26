function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the target element
    }
  }
  return "innn"; // Return -1 if the target element is not found
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const target = 3;
const index = linearSearch(arr, target);
console.log(index); // Output: 2
