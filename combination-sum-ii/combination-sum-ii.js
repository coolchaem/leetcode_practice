/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  const tracker = (start, remain, arr) => {
    for (let i = start; i < candidates.length; i += 1) {
      if (i > start && candidates[i] === candidates[i-1]) {
        continue;
      }
      if (candidates[i] === remain) {
        arr.push(candidates[i]);
        result.push(arr);
        break;
      } else if (candidates[i] < remain) {
        let newArr = arr.slice();
        newArr.push(candidates[i]);
        tracker(i + 1, remain - candidates[i], newArr);
      } else {
        break;
      }
    }
  };
  tracker(0, target, []);
  return result;
};