/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    let j = i + 1, end = intervals[i][1];
    while (j < intervals.length && intervals[j][0] <= end) {
      end = Math.max(end, intervals[j][1]);
      j += 1;
    }
    result.push([intervals[i][0], end]);
    i = j - 1;
  }
  return result;
};