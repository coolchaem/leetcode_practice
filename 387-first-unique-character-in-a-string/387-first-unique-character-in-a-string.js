/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let tmp = new Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).fill(0);

  for (let i = 0; i < s.length; i += 1) {
    tmp[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
  }

  for (let i = 0; i < s.length; i += 1) {
    if (tmp[s.charCodeAt(i) - 'a'.charCodeAt(0)] === 1) {
      return i;
    }
  }
  return -1;
};