let ar = [5, 7, 16, 1, 2];

let sum = 0;
let l = ar[0];

for (let i = 0; i < ar.length; i++) {
  if (ar[i] > l) {
    l = ar[i];
  }
  sum += ar[i];
}
sum = sum - l;

if (sum == l) {
  console.log(true);
} else {
  console.log(false);
}
