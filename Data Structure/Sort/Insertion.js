function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    var key = arr[i];
    var j = i - 1;
    while (arr[j] > key && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

arr = [1, 4, 3, 2, 5];
console.log(insertionSort(arr));


function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    var key = arr[i];
    var j = i - 1;
    while (arr[j] > key && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

arr = [1, 4, 3, 2, 5];
console.log(insertionSort(arr));