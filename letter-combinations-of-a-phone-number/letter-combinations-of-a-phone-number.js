/**
 * @param {string} digits // array???
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  var letters = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"};
  var result = [];
  dfs(digits, 0, '', result, letters);
  return result;    
};

var dfs = function(digits, depth, comb, result, letters) {
  if (depth === digits.length) {
    result.push(comb);
    return;
  }
  letters[digits[depth]].split('').forEach(ch => {
    let letter = comb + ch;
    dfs(digits, depth+1, letter, result, letters);
  });
}