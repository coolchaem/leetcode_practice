/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0;
  for (let i = 0, min = prices[0]; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    result = Math.max(result, prices[i] - min);
  }
  return result;
};