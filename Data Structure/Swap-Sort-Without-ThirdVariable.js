let k = [1, 2, 3, 4, 1, 5, 223, 3, 6];

console.log(`Before sorting: k = ${k}`);

for (let i = 0; i < k.length; i++) {
  for (let j = 0; j < k.length - 1 - i; j++) {
    if (k[j] > k[j + 1]) {
      // Swap k[j] and k[j + 1] without a third variable
      k[j] = k[j] + k[j + 1];
      k[j + 1] = k[j] - k[j + 1];
      k[j] = k[j] - k[j + 1];
    }
  }
}

console.log(`After sorting: k = ${k}`);
