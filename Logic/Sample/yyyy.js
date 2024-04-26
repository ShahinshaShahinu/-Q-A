var isHappy = function (n) {
  function getNext(n) {
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  let slow = n;
  let fast = n;

  do {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  } while (slow !== fast);

  return slow === 1;
};

console.log(isHappy(5));






// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
