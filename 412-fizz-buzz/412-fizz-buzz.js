/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = [];
  for (let i = 1; i <= n; i += 1) {
    let fb = '';
    if (Number.isInteger(i / 3)) {
      fb += "Fizz";
    }
    if (Number.isInteger(i / 5)) {
      fb += "Buzz";
    }
    result.push(fb || i.toString());
  }
  return result;
};