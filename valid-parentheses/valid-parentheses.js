/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  s.split('').forEach(c => {
    if (stack.length !== 0 && ((c === ')' && stack[stack.length - 1] === '(')
        || (c === ']' && stack[stack.length - 1] === '[')
        || (c === '}' && stack[stack.length - 1] === '{'))
       ) {
      stack.pop();
    } else {
      stack.push(c);
    }
  });
  return stack.length === 0;
};