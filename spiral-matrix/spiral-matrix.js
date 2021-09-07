/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let i = 0, j = 0, result = [], width = matrix[0].length, height = matrix.length, count = 1, direction = 1;
  while (result.length !== matrix[0].length * matrix.length) {
    let max = count % 2 === 1 ? width : height;
    let index = 0;
    while (index !== max) {
      result.push(matrix[j][i]);
      if (count % 2 === 0) {
        j = j + 1 * direction;
      } else {
        i = i + 1 * direction;
      }
      index += 1;      
    }

    if (count % 2 === 0) {
      width -= 1;
      j -= (1 * direction);
      direction *= -1;
      i += (1 * direction);
    } else {
      height -= 1;
      j += (1 * direction);
      i -= (1 * direction);
    }
    count += 1;
  }
  return result;
};