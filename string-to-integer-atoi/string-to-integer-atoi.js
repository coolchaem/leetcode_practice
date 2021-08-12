/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    // 1.
    while (i < s.length && s[i] === ' ') {
        i += 1;
    }
    // 2.
    var minus = false;
    if (s[i] === '-' || s[i] === '+') {
        minus = s[i] === '-' ? true : false;
        i += 1;
    }
    if (!(s[i] >= '0' && s[i] <= '9' )) return 0;
    
    // 3.
    var numString = '';
    for (; i < s.length; i+=1)  {
        var ch = s[i];
        if (ch >= '0' && ch <= '9') {
            numString += ch;
        } else {
            break;
        }  
    }
    if (minus) {
        numString = '-' + numString;
    }
    return (
        Math.abs(numString) < Math.pow(2, 31) ? numString : (
            minus ? -Math.pow(2, 31) : Math.pow(2, 31) - 1
        )
    );
};