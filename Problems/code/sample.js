// let s = [1, 4, 5, 2, 9, 4,2];

// for (let i = 0; i < s.length; i += 2) {
//   for (let k = 1; k <= s[i + 1]; k++) {
//     console.log(s[i]);
//   }
//   for (let j = 1; j <= s[i]; j++) {
//     console.log(s[i + 1]);
//   }

//   if ((s.length - 1) % 2 !== 0 && s.length-1==i) {
//     console.log('dd');
//      break
//   }

// }


let s = [1, 4, 5, 2, 9, 4];

for (let i = 0; i < s.length; i += 2) {
  if (s[i]==s[s.length-1]) {
    console.log(s[i]);
    break;
  }

  for (let k = 1; k <= s[i + 1]; k++) {
    console.log(s[i]);
  }
  for (let j = 1; j <= s[i]; j++) {
    console.log(s[i + 1]);
  }
}



