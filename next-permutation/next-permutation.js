/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i -= 1;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j > 0 && nums[j] <= nums[i]) {
      j -= 1;
    }
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp; 
  } 
  let reverse = (index) => {
    let start = index, end = nums.length - 1;
    while (start < end) {
      let tmp = nums[end];
      nums[end] = nums[start];
      nums[start] = tmp; 
      start += 1;
      end -= 1;
    }
  };
  reverse(i + 1); 
};