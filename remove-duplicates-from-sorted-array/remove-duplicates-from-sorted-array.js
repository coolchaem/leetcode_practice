/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var i = 0, j = 0, k = 0;
  while (k < nums.length) {
    while (k < nums.length && nums[k] === nums[j]) {
      k += 1;
    }
    nums[i] = nums[j];
    j = k;
    i += 1;
  }
  return i;
};