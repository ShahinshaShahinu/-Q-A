var isAnagram = function (s, t) {
  let flag = false;

  let ar1 = [...s];
  let ar2 = [...t];

  let kar1 = SortStr(ar1);
  let kar2 = SortStr(ar2);

  if (ar1.length == ar2.length) {
    for (let k = 0; k < kar1.length; k++) {
      if (kar1[k] == kar2[k]) {
        flag = true;
      } else {
        return false;
      }
    }

    return flag;
  } else {
    return false;
  }

  function SortStr(ar) {
    for (let i = 0; i < ar.length; i++) {
      for (let j = i + 1; j < ar.length; j++) {
        if (ar[i] > ar[j]) {
          let temp = ar[j];
          ar[j] = ar[i];
          ar[i] = temp;
        }
      }
    }
    return ar;
  }
};

console.log(isAnagram("rat", "cat"));
