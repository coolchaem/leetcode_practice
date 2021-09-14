/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {  
  const checker = (i, j, charIndex) => {
    if (i < 0 || i >= board.length || j >= board[i].length || j < 0) {
      return false;
    }
    if (board[i][j] === word.charAt(charIndex)) {
      return true;
    }
    return false;
  };
  
  const tracker = (i, j, charIndex) => {
    if (charIndex === word.length) {
      return true;
    }
    if (checker(i, j, charIndex) === false) {
      return false;
    }
    let tmp = board[i][j];
    board[i][j] = "1";
    let checked = tracker(i, j - 1, charIndex + 1) 
                  || tracker(i - 1, j, charIndex + 1)
                  || tracker(i, j + 1, charIndex + 1)
                  || tracker(i + 1, j, charIndex + 1);
    board[i][j] = tmp;
    return checked;
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word.charAt(0)) {
        if (tracker(i, j, 0) === true) {
          return true;
        }
      }
    }
  }
  return false;
};