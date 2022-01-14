/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const checkFailed = {};
  return canBreak(s, wordDict, checkFailed);
};

var canBreak = function(s, wordDict, checkFailed) {
  for (const word of wordDict) {
    if (s.substring(0, word.length) === word) {
      const remainStr = s.substring(word.length);
      if (!remainStr.length) {
        return true;
      }
      if (checkFailed[remainStr] === undefined || checkFailed[remainStr] === false) {
        if (!canBreak(remainStr,wordDict, checkFailed)) {
          checkFailed[remainStr] = true;
        } else {
            return true;
        }
      }      
    }
  }
  return false;
}