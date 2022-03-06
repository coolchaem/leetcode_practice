/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let tmp = new Set();
  for (let i = 0; i < nums.length; i += 1) {
    let num = nums[i];
    if (tmp.has(num)) {
      return num;
    }
    tmp.add(num);
  }
  return nums[0];
};