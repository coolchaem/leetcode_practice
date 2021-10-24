/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let result = [];
  let tmp = [];
  for (let i = 0; i < nums.length; i++) {
    while (tmp.length !== 0 && nums[tmp[tmp.length - 1]] <= nums[i]) {
      tmp.pop();
    }
    tmp.push(i);
    if (tmp[0] === i - k) {
      tmp.shift();
    }
    if (i >= k - 1) {
      result.push(nums[tmp[0]]);
    }
  }
  return result;
};
