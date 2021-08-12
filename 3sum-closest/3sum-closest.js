/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  var result;
  var i = 0;
  while (i < nums.length - 2) {
    var j = i + 1, k = nums.length - 1;
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      if (sum < target) {
        j += 1;
      } else if (sum === target) {
        j = k;
      } else {
        k -= 1;
      }
      if (result === undefined || Math.abs((target - sum)) < Math.abs((target - result))) {
        result = sum;
      }
    }
    i += 1;
  }
  return result;  
};