/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0;
  while (i < nums.length) {
    let j = i + 1;
    while (nums[i] === 0 && j < nums.length) {
      if (nums[j] !== 0) {
        nums[i] = nums[j];
        nums[j] = 0;
        break;
      }   
      j += 1;
    }
    i += 1;    
  }
};