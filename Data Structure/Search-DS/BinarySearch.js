function binarySearching(array, target) {
  let startIdx = 0;
  let endIdx = array.length - 1;

  while (startIdx <= endIdx) {
    let middile = startIdx + Math.floor((endIdx - startIdx) / 2);

    if (array[middile] == target) {
      return middile;
    } else if (array[middile] > target) {
      endIdx = middile - 1;
    } else if (array[middile] < target) {
      startIdx = middile + 1;
    }
  }

  return "invalid ";
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearching(array, 6));

// using recursion  BInary search  //
function binarySearchRecursion(
  arra,
  targetV,
  startIdx = 0,
  endIdx = arra.length - 1
) {
  if (startIdx > endIdx) {
    return "please change the value";
  }

  let middile = startIdx + Math.floor((endIdx - startIdx) / 2);

  if (arra[middile] === targetV) {
    return middile;
  } else if (arra[middile] > targetV) {
    return binarySearchRecursion(arra, targetV, startIdx, middile - 1);
  } else {
    return binarySearchRecursion(arra, targetV, middile + 1, endIdx);
  }
}

let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("after recursion");
console.log(binarySearchRecursion(arra, 5));
