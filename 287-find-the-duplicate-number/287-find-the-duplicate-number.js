/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let result = -1;
  for(let i = 0; i < nums.length; i += 1) {
    let num = Math.abs(nums[i]);
    if (nums[num] < 0) {
      result = Math.abs(num);
      break;
    }
    nums[num] *= -1;
  }
  
  for(let i = 0; i < nums.length; i += 1) {
    nums[i] = Math.abs(nums[i]);
  }
  
  return result;
};