/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  const swap = (a, b) => {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  };
  const tracker = (start) => {
    if (start >= nums.length) {
      result.push(nums.slice());
      return;
    }
    
    for (let i = start; i < nums.length; i += 1) {
      swap(start, i);
      tracker(start + 1);
      swap(start, i);
    }    
  };
  tracker(0);
  return result;
};