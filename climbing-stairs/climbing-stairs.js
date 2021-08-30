/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) return n;
  let n1 = 1, n2 = 2, result = 1;
  for (let i = 3; i <= n; i += 1) {
    result = n1 + n2;
    n1 = n2;
    n2 = result;
  }
  return result;
};