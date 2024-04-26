let a = ["apple", "orange", "kkpp"];
let ne = [];
for (let i = 0; i < a.length; i++) {
  let k = [...a[i]];let le=''
  for (let j = k.length - 1; j >= 0; j--) {
   le +=k[j]
  }
  ne[i]=le
}
console.log(ne);
