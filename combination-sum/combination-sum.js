/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const searchAll = (remain, ans, start) => {
    for (let i = start; i < candidates.length; i += 1) {
      if (candidates[i] > remain) {
        break;
      }
      else if (candidates[i] === remain) {
        ans.push(candidates[i]);
        result.push(ans);
        break;
      } else {
        let newAns = ans.slice();
        newAns.push(candidates[i]);
        searchAll(remain - candidates[i], newAns, i);
      }
    }    
  };
  searchAll(target, [], 0);
  return result;
};