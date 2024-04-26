let arr = [3, 9, 2, 8, 7, 6];
function quicksort(arr) {
  quicksorthelper(arr, 0, arr.length - 1);
}

function quicksorthelper(arr, start, end) {
  if (start >= end) {
    return;
  }

  let pivotidx = start;
  let leftidx = start + 1;
  let rightidx = end;

  while (leftidx <= rightidx) {
    if (arr[leftidx] > arr[pivotidx] && arr[rightidx] < arr[pivotidx]) {
      swap(arr, leftidx, rightidx);
      leftidx = leftidx + 1;
      rightidx = rightidx - 1;
    }
    if (arr[leftidx] <= arr[pivotidx]) {
      leftidx = leftidx + 1;
    }
    if (arr[rightidx] >= arr[pivotidx]) {
      rightidx = rightidx - 1;
    }
  }

  swap(arr, pivotidx, rightidx);
  quicksorthelper(arr, start, rightidx - 1);
  quicksorthelper(arr, rightidx + 1, end);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

quicksort(arr);

console.log(arr);
