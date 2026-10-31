var reversePrefix = function (word, ch) {
  let flag = false;
  let rev = [];
  for (let i = 0; i < word.length; i++) {
    rev.push(word[i]);
    if (word[i] == ch) {
      flag = true;
      break;
    }
  }

  if (flag) {
    rev = rev.reverse();
    for (let i = rev.length; i < word.length; i++) {
      rev.push(word[i]);
    }
  }

  return flag == true ? rev.join("") : word;
};

console.log(reversePrefix("abcdefd", "d"));
