/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let row = {}, col = {}, sub = {};
  for (let i = 0; i < board.length; i += 1) {
    row[i] = {};
    col[i] = {};
    sub[i] = {};
  }
  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board[0].length; c += 1) {
      let num = board[r][c];
      if (num === '.') {
        continue;
      }
      
      let subIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (num in row[r] || num in col[c] || num in sub[subIndex]) {
        return false;
      } else {
        row[r][num] = true;
        col[c][num] = true;
        sub[subIndex][num] = true;
      }
      
    }
  }
  return true;
};