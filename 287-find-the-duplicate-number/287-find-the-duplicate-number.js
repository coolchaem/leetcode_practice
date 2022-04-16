/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let tmp = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (tmp[nums[i]] !== undefined) {
      return nums[i];
    }
    tmp[nums[i]] = true;
  }
};