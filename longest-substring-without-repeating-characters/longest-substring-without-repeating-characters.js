/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var sub = {};
    var result = 0;
    for (let i = 0, start = 0; i < s.length; i += 1) {
        if (s[i] in sub) {
            var len = Object.keys(sub).length;
            result = result < len ? len : result;
            sub = {};
            i = start;
            start = i + 1;
        } else {
            sub[s[i]] = '';            
        }
    }
    var len = Object.keys(sub).length;
    result = result < len ? len : result;
    return result;    
};