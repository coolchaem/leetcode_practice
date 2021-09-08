/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let result = [], count = 1, index = 0;
  for (let i = 0; i < n; i++) {
    result.push(new Array(n));
  }
  while (count <= n * n) {
    // go right
    let limit = n - index;
    for (let i = index; i < limit; i++) {
      result[index][i] = count++;
    }
    
    // end = 4 - (1 + 1) = 1
    let end = n - (index + 1);
    
    // go down
    for (let i = index + 1; i < limit; i++) {
      result[i][end] = count++;
    }
    
    // go left
    for (let i = end - 1; i >= index; i--) {
      result[end][i] = count++;      
    }
    
    // go up
    for (let i = end - 1; i > index; i--) {
      result[i][index] = count++;
    }
    index += 1;
  }
  
  return result;
};
//  1  2  3  4
// 12 13 14  5
// 11 16 15  6
// 10  9  8  7