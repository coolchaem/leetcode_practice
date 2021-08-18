/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  
  if (nums[lo] !== target) {
    return [-1, -1];
  }
  let first = lo;
  
  hi = nums.length - 1;
  while (lo < hi) {
    let mid = Math.ceil((lo + hi) / 2);
    if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid;
    }    
  }
  
  return [first, hi];
};