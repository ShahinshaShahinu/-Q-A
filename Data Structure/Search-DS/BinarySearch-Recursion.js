function BInaryRecurSearch(
  array,
  target,
  startIdx = 0,
  endIdx = array.length - 1
) {
  if (startIdx > endIdx) {
    return "invalid";
  }

  let middile = Math.floor(startIdx + (endIdx - startIdx) / 2);

  if (array[middile] === target) {
    return middile;
  } else if (array[middile] > target) {
    return BInaryRecurSearch(array, target, startIdx, (endIdx = middile - 1));
  } else if (array[middile] < target) {
    return BInaryRecurSearch(array, target, (startIdx = middile + 1), endIdx);
  }
}

let array = [1, 4, 5, 3, 2, 6, 3, 6];

for (i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log(array);

console.log(BInaryRecurSearch(array, 2));
