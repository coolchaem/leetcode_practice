/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  nums = nums.sort((a, b) => a - b);
  let i = 0;
  while (i < nums.length) {
    if (i !== 0 && nums[i] === nums[i-1]) {
      i += 1;
      continue;
    }
    let j = i + 1; k = nums.length - 1;
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j += 1;
      } else if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);       
        while (j < k && nums[j] === nums[j+1]) j += 1;
        while (j < k && nums[k] === nums[k-1]) k -= 1;
        j += 1;
        k -= 1;
      } else {
        k -= 1;
      }
    }
    i += 1;
  }
  return result;
};