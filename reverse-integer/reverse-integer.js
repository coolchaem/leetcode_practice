/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = Math.abs(x).toString().split('').reverse().join('');
  if (result > -(Math.pow(-2, 31) + 1)) {
    return 0;
  }
  return x < 0 ? -result : result;
};