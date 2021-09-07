/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length && i <= max; i++) {
    let cur = i + nums[i];
    max = Math.max(max, cur);
  }
  return max >= (nums.length - 1);
};