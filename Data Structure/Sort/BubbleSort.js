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
