/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  let result = [0, 1], code = 1;
  for (let i = 1; i < n; i++) {
    code = code << 1;
    for (let j = result.length - 1; j >= 0; j--) {
      result.push(result[j] | code);
    }
  }
  return result;
};