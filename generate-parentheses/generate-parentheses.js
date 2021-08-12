/**
 * @param {number} n
 * @return {string[]}
 */
// 18 ~
var generateParenthesis = function(n) {
  result = [];
  var gen = function (index, comb, needPair) {
    if (index === n) {
      for (let i = 0; i < needPair; i += 1) comb += ')';
      result.push(comb);
      return;
    }
    gen(index + 1, comb + '(', needPair + 1);
    if (needPair !== 0) gen(index, comb + ')', needPair - 1);
  }
  gen(0, '', 0);
  return result;
};

