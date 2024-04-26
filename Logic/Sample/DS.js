function binaryarr(array, target) {
  let startIdx = 0;
  let endIdx = array.length - 1;

  while (startIdx <= endIdx) {
    let middle = Math.floor(startIdx + (endIdx - startIdx) / 2);

    if (array[middle] === target) {
      return middle;
    } else if (array[middle] > target) {
      endIdx = middle - 1;
    } else if (array[middle] < target) {
      startIdx = middle + 1;
    }
  }

  return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(binaryarr(array, 7));
