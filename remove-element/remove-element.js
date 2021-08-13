/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var i = 0;
  for (var j = 0; j < nums.length; j += 1) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i += 1;
    }
  }
  return i;
};