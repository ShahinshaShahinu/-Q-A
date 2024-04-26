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

// Bubble Sort ..//
function BubbleSort(ar) {
  for (let i = 0; i < ar.length; i++) {
    for (j = i; j < ar.length; j++) {
      if (ar[i] > ar[j + 1]) {
        let temp = ar[i];
        ar[i] = ar[j + 1];
        ar[j + 1] = temp;
      }
    }
  }
  return ar;
}

ar = [8, 5, 4, 6];

console.log(BubbleSort(ar));

//selection Sort //

function selectionSort(a) {
  let smallest;
  for (i = 0; i < a.length; i++) {
    for (j = i; j < a.length; j++) {
      if (a[j] < a[i]) {
        smallest = a[j];

        a[j] = a[i];
        a[i] = smallest;
      }
    }
  }
  return a;
}

a = [9, 1, 10, -1, 6, 8, 0, 9];

console.log(selectionSort(a));

//Quick Sort //

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

// Merge Sort //

function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middleidx = Math.floor(arr.length / 2);
  let firsthalf = arr.slice(0, middleidx);
  let lasthalf = arr.slice(middleidx);

  return joinarr(mergesort(firsthalf), mergesort(lasthalf));

  //first mergesort(firsthalf)  this function is working then after that mergesort(lasthalf)  this function is working

  // this is a ricresive function it is calling to itself it is know recurtion //
}

function joinarr(firsthalf, lasthalf) {
  let newarr = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < firsthalf.length && j < lasthalf.length) {
    if (firsthalf[i] <= lasthalf[j]) {
      newarr[k++] = firsthalf[i++];
    } else {
      newarr[k++] = lasthalf[j++];
    }
  }

  while (i < firsthalf.length) {
    newarr[k++] = firsthalf[i++];
  }

  while (j < lasthalf.length) {
    newarr[k++] = lasthalf[j++];
  }

  return newarr;
}

let Arr = [3, 2, 5, 4];
console.log(mergesort(Arr));
