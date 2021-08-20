/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let result = 0, curFartest = 0, curEnd = 0;
  for (let i = 0; i < nums.length - 1; i += 1) {
    curFartest = Math.max(curFartest, i + nums[i]);
    if (curEnd === i) {
      result += 1;
      curEnd = curFartest;
    }
  }
  return result;
};