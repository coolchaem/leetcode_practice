/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    while (cur > 0 && cur <= nums.length && nums[cur - 1] !== cur) {
      nums[i] = nums[cur - 1];
      nums[cur - 1] = cur;
      cur = nums[i];
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};