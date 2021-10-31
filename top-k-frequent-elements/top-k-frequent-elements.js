/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let tmp = {};
  nums.forEach(num => tmp[num] = tmp[num] === undefined ? 1 : tmp[num] + 1);
  let order = Object.entries(tmp).sort((a, b) => b[1] - a[1]);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(order[i][0]);
  }
  return result;
};