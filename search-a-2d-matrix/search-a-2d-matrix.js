/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let lowRow = 0, highRow = matrix.length - 1;
  while (lowRow <= highRow) {
    let midRow = Math.floor((lowRow + highRow) / 2);
    if (matrix[midRow][0] < target) {
      lowRow = midRow + 1;
    } else if (matrix[midRow][0] === target) {
      return true;
    } else {
      highRow = midRow - 1;
    }
  }
  
  highRow = highRow < 0 ? 0 : highRow;
  let lowCol = 0, highCol = matrix[highRow].length - 1;
  while (lowCol <= highCol) {
    let midCol = Math.floor((lowCol + highCol) / 2);
    if (matrix[highRow][midCol] < target) {
      lowCol = midCol + 1;
    } else if (matrix[highRow][midCol] === target) {
      return true;
    } else {
      highCol = midCol - 1;
    }
  }
  return false;  
};