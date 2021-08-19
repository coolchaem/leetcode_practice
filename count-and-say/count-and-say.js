/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let result = "1";
  for (let i = 2; i <= n; i += 1) {
    let count = 1, num = result[0], target = result;
    result = "1" + result[0];
    for (let j = 1; j < target.length; j += 1) {
      if (num === target[j]) {
        count += 1;
        result = result.substring(0, result.length-2) + count.toString() + num.toString();
      } else {
        count = 1;
        num = target[j];
        result += count.toString() + num.toString();
      }
    }
  }
  return result;
};