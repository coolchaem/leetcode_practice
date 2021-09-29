/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let tmp = [], result = 0;
  grid.forEach((arr, index) => tmp.push(new Array(arr.length).fill(0)));
  let marking = (m, n) => {
    if (m < 0 || m >= grid.length || n < 0 || n >= grid[m].length || grid[m][n] === '0' || tmp[m][n] === 1) return;
    tmp[m][n] = 1;
    marking(m, n + 1);
    marking(m + 1, n);
    marking(m, n - 1);
    marking(m - 1, n);    
  };
  
  grid.forEach((arr, m) => {
    arr.forEach((land, n) => {
      if (land === '1' && tmp[m][n] !== 1) {
        marking(m, n);
        result += 1;
      }
    });
  });
  return result;
};