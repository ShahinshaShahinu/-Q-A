// missing numbers in an array of integers  

const ar = [2, 4, 6, 10, 12, 14];

//          0,1,2,3
for (let i = 0; i < ar.length; i++) {
  if (ar[i] + 1 != ar[i + 1] && i < ar.length - 1) {
    let it = ar[i];
    while (ar[i + 1] != it + 1) {
      console.log(it + 1);
      it++;
    }
  }
}
