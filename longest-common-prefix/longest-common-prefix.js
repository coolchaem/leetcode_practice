/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var result = '', i = 0, current = strs[0];
  while (strs.every(str => {
    if (i >= str.length || i >= current.length) return false;
    return str[i] === current[i];
  })) {
    result += current[i++];
  }
  return result;
};