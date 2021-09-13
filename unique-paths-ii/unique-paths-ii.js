/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  // init
  let dp = [];
  for (let i = 0; i < obstacleGrid.length; i++) {
    dp.push(new Array(obstacleGrid[i].length).fill(0));
  }

  // init by obastacleGrid
  for (let i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 0) {
      dp[i][0] = 1;
    } else {
      break;
    }
  }
  for (let j = 0; j < obstacleGrid[0].length; j++) {
    if (obstacleGrid[0][j] === 0) {
      dp[0][j] = 1;
    } else {
      break;
    }
  }
  
  // dp
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j ++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  
  return dp[dp.length - 1][dp[0].length - 1];
};