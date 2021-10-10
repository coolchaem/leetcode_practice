/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let allProduct = 1, zero = 0;
  nums.forEach(num => {
    if (num !== 0) {
      allProduct *= num;
    } else {
      zero += 1;
    }
  });
  
  let result = new Array(nums.length);
  nums.forEach((num, index) => {
    if (num === 0) {
      result[index] = zero === 1 ? allProduct : 0;
    } else {
      result[index] = zero === 0 ? allProduct / num : 0;
    }
  });
  return result;
};