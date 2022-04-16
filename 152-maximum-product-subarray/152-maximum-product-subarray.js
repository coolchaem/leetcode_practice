/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = nums[0], min = nums[0], result = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    let cur1 = nums[i] * max, cur2 = nums[i] * min;
    max = Math.max(nums[i], Math.max(cur1, cur2));
    min = Math.min(nums[i], Math.min(cur1, cur2));
    result = Math.max(result, max);
  }
  return result;
};