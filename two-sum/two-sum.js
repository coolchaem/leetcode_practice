/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let tmp = {};
  for (let index = 0; index < nums.length; index++) {
    let remain = target - nums[index];
    if (tmp[remain] === undefined) {
      tmp[nums[index]] = index;
    } else {
      return [index, tmp[remain]];
    }
  }
  return [];
};