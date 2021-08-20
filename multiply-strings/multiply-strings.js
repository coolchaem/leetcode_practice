/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  let result = [];
  for (let i = 0; i < num1.length + num2.length; i += 1) {
    result.push(0);
  }
  for (let i = num1.length - 1; i >= 0; i -= 1) {
    for (let j = num2.length - 1; j >= 0; j -= 1) {
      const p1 = i + j, p2 = i + j + 1;
      let sum = result[p2] + num1[i] * num2[j];
      result[p2] = sum % 10;
      result[p1] += Math.floor(sum / 10);
    }
  }
  if (result[0] === 0) result.shift();
  return result.join('');
};