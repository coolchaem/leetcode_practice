/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let tmp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = tmp;      
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      let ref_j = matrix.length - 1 - j;
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][ref_j];
      matrix[i][ref_j] = tmp;
    }
  }
};
