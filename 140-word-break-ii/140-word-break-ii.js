/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const checkFailed = {}, result = [];
  canBreak(s, wordDict, checkFailed, '', result);
  return result;
};

var canBreak = function(s, wordDict, checkFailed, accum, result) {
  for (const word of wordDict) {
    if (s.substring(0, word.length) === word) {
      const sentence = accum + ' ' + word;
      const remainStr = s.substring(word.length);
      if (!remainStr.length) {
        result.push(sentence.substring(1));
        continue;
      }
      canBreak(remainStr, wordDict, checkFailed, sentence, result);
    }
  }
  return false;  
};