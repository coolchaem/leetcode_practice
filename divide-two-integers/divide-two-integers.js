/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let result = 0, minus = (Math.sign(dividend) * Math.sign(divisor)) < 0;
  dividend = Math.sign(dividend) > 0 ? -dividend : dividend;
  divisor = Math.sign(divisor) > 0? -divisor : divisor;
  while (divisor >= dividend) {
    let tmp = divisor, num = -1;
    while ((tmp << 1) >= dividend && (tmp << 1) < -0) {
      tmp <<= 1;
      num <<= 1;
    }
    dividend = dividend - tmp;
    result += num;
  }
  if (!minus && result === Math.pow(-2, 31)) {
    return ~Math.pow(-2, 31);
  }
  return minus ? result : -result;
};