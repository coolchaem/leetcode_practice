/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = 0, start = 0, end = height.length - 1;
  let leftMax = height[start], rightMax = height[end];   
  while (start < end) {
    if (height[start] < height[end]) {
      if (height[start] <= leftMax) {
        result += leftMax - height[start];
      } else {
        leftMax = height[start];
      }
      start += 1;
    } else {
      if (height[end] <= rightMax) {
        result += rightMax - height[end];
      } else {
        rightMax = height[end];
      }
      end -= 1;      
    }
  }
  return result;
};