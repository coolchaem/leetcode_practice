/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let cur = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      nums[cur++] = nums[i];
    }
  }
  
  for (; cur < nums.length; cur += 1) {
    nums[cur] = 0;
  }  
};