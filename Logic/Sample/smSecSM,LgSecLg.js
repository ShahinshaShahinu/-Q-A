var maxProductDifference = function (nums) {
  let largest1 = -Infinity;
  let largest2 = -Infinity;
  let smallest1 = Infinity;
  let smallest2 = Infinity;

  for (let num of nums) {
    if (num > largest1) {
      largest2 = largest1;
      largest1 = num;
    } else if (num > largest2) {
      largest2 = num;
    }

    if (num < smallest1) {
      smallest2 = smallest1;
      smallest1 = num;
    } else if (num < smallest2) {
      smallest2 = num;
    }
  }

  // Calculate product differences without using Math.max
  const productDiff1 = largest1 * largest2 - smallest1 * smallest2;
  const productDiff2 = largest1 * largest2 - smallest1 * smallest2;

  // Return the maximum product difference without using Math.max
  if (productDiff1 > productDiff2) {
    return productDiff1;
  } else {
    return productDiff2;
  }
};
