/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var result = [];
  nums.sort((a, b) => a - b);
  let a = 0;
  while (a < nums.length - 3) {
    if (a > 0 && nums[a] === nums[a-1]) {
      a += 1;
      continue;
    }
    let d = nums.length - 1;
    let b = a + 1, c = d - 1;
    while (a + 1 < d - 1) {
      if (b >= c || (d < nums.length - 1 && nums[d] === nums[d+1])) {
        d -= 1;
        b = a + 1;
        c = d - 1;
        continue;
      }
      if (b !== a + 1 && nums[b] === nums[b-1]) {
        b += 1;
        continue;
      }
      if (c !== d - 1 && nums[c] === nums[c+1]) {
        c -= 1;
        continue;
      }
      let sum = nums[a] + nums[b] + nums[c] + nums[d];
      if (sum < target) {
        b += 1;
      } else if (sum === target) {
        result.push([nums[a], nums[b], nums[c], nums[d]]);
        b += 1;
      } else {
        c -= 1;
      }
    }
    a += 1;
  }
  return result;
};