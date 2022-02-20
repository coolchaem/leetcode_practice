/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row].length; col += 1) {
      let count = getLiveNeighbors(row, col, board);
      if (board[row][col] === 1 && (count >= 2 && count <= 3)) {
        board[row][col] = 3; // 1 1
      } else if (board[row][col] === 0 && count === 3) {
        board[row][col] = 2; // 1 0
      }
    }
  }
  
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row].length; col += 1) {
      board[row][col] = board[row][col] >> 1;
    }
  }
};

function getLiveNeighbors(row, col, board) {
  let count = board[row][col] === 1 ? -1 : 0;
  for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, board.length - 1); i += 1) {
    for (let j = Math.max(col - 1, 0); j <= Math.min(col + 1, board[i].length - 1); j += 1) {
      if (board[i][j] & 1 === 1) {
        count += 1;
      }
    }
  }
  return count;
}