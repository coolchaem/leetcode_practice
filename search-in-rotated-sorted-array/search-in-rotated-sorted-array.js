/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  let lo = 0, hi = nums.length - 1;
  let mid = Math.round((lo + hi) / 2);
  while (lo < hi && mid !== hi) {
    if (nums[mid] === target) return mid;
    if (nums[mid] < nums[hi]) {
      if (nums[mid] < target && target <= nums[hi]) {
        lo = mid;
      } else {
        hi = mid;
      }      
    } else {
      if (nums[lo] <= target && target < nums[mid]) {
        hi = mid;
      } else {
        lo = mid;
      }
    }
    mid = Math.round((lo + hi) / 2);
  }
  if (nums[lo] === target) return lo;
  if (nums[hi] === target) return hi;
  return -1;
};