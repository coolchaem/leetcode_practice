/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let result = nums[0];
  for (let i = 0, sum = 0; i < nums.length; i += 1) {
    sum += nums[i];
    result = Math.max(result, sum);
    if (sum < 0) {
      sum = 0;
    }
  }  
  return result;
};