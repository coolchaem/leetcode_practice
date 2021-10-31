/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let dp = new Array(s.length + 1);
  for (let j = 0; j < dp.length; j++) {
    dp[j] = new Array(p.length + 1).fill(false);
  }
  dp[0][0] = true;
  
  for (let j = 0; j < p.length; j++) {
    if (p[j] === '*' && dp[0][j - 1]) {
      dp[0][j + 1] = true;
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (p[j] === '.' || s[i] === p[j]) {
        dp[i + 1][j + 1] = dp[i][j];
      }
      if (p[j] === '*') {
        if (p[j - 1] !== s[i] && p[j - 1] !== '.') {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1];
        }
      }
    }
  }
  return dp[s.length][p.length];
};