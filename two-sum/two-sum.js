/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapper = {};
    for (let i = 0; i < nums.length; i += 1) {
        let diff = target - nums[i];
        if (diff in mapper) {
            return [mapper[diff], i];
        }
        mapper[nums[i]] = i;
    }
    return [];
};