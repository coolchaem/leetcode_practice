/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let l = 0, r = s.length - 1;
  while(l < r) {
    while(l < s.length && !s.charAt(l).match(/^[0-9a-z]/i)) {
      l += 1;
    }
    while(r >= 0 && !s.charAt(r).match(/^[0-9a-z]/i)) {
      r -= 1;
    }

    if(l < r && s.charAt(l++).toLowerCase() !== s.charAt(r--).toLowerCase()) {
      return false;
    }
  }
  return true;
};