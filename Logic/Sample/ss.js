var combinationSum2 = function (candidates, target) {
  let k = [];
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i] < 8) {
      for (let j = 0; j < candidates.length; j++) {
        if (i != j) {
          if (candidates[j] < 8) {
            let sum = candidates[i] + candidates[j];
            if (sum == 8) {
              k = [candidates[i], candidates[j]];
              
            }
          }
        }
      }
    }
  }

  console.log(k);
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
