var buildArray = function (nums) {
  let ans = [];

  for (i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }

  return ans
};


console.log(buildArray([5, 0, 1, 2, 3, 4]));