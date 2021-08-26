/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1, last = 1;
    while (i >= 0 && last !== 0) {
        last = +digits[i] + last;
        digits[i] = last % 10;
        last = Math.floor(last / 10);
        i -= 1;
    }
    if (last === 1) digits.unshift(last);
    return digits.slice();
};