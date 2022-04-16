/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let cIndex = 0;
  while(cIndex < strs[0].length) {    
    for (let i = 1; i < strs.length; i += 1) {
      if (strs[i].length === cIndex || strs[i][cIndex] !== strs[0][cIndex]) {
        return strs[0].substring(0, cIndex);
      }
    }
    cIndex += 1;
  }
  return strs[0].substring(0, cIndex);
};