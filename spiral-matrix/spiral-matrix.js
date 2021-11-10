/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let rowBegin = 0, rowEnd = matrix.length - 1, colBegin = 0, colEnd = matrix[0].length - 1, result = [];
  
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // right
    for (let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i]);
    }
    rowBegin++;
  
    // down
    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;
    
    // left
    for (let i = colEnd; rowBegin <= rowEnd && i >= colBegin; i--) {
      result.push(matrix[rowEnd][i]);
    }
    rowEnd--;
    
    // up
    for (let i = rowEnd; colBegin <= colEnd && i >= rowBegin; i--) {
      result.push(matrix[i][colBegin]);
    }
    colBegin++;
  }
  
  return result;
};