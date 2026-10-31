var splitWordsBySeparator = function (words, separator) {
  let newAr = [],
    str = "";
  for (let i = 0; i < words.length; i++) {
    let k = words[i];
    str=''
    for (let j = 0; j < k.length; j++) {
      if (k[j] != separator) {
        str += k[j];
      }
      if (k[j] == separator && str!='') {
        newAr.push(str);
        str = "";
      } else if (j == k.length-1 && str!='') {
        newAr.push(str);
        str = "";
      }
    }
  }
  console.log(newAr);
  return newAr;
};

console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));
