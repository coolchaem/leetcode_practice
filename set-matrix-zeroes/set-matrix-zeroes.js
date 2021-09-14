/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let rowSet = new Set(), colSet = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i);
        colSet.add(j);
      }
    }
  }
  
  rowSet.forEach(row => {
    for (let j = 0; j < matrix[row].length; j++) {
      matrix[row][j] = 0;
    }
  });
  
  colSet.forEach(col => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  });
};