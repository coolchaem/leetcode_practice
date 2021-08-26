/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1, j = b.length - 1, carry = 0, result = '';
  while (i >= 0 || j >= 0 || carry !== 0) {
      let sum = carry;
      if (i >= 0) sum += +a[i--];
      if (j >= 0) sum += +b[j--];
      carry = Math.floor(sum / 2);
      sum %= 2;
      result = sum + result;
  }
    return result;
};