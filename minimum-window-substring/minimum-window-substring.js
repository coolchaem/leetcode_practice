/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let mapper = new Array(128).fill(0);
  for (let i = 0; i < t.length; i++) {
    mapper[t.charCodeAt(i)]++;
  }
  let counter = t.length, begin = 0, end = 0, minLength = Infinity, minStart = 0;
  
  while (end < s.length) {
    if (mapper[s.charCodeAt(end)] > 0) {
      counter--;
    }
    mapper[s.charCodeAt(end)]--;
    end++;    
   
    while (counter === 0) {
      if (end - begin < minLength) {
        minLength = end - begin;
        minStart = begin;
      }
      
      if (mapper[s.charCodeAt(begin)] >= 0) {
        counter++;
      }
      mapper[s.charCodeAt(begin)]++;
      begin++;
    }
  }
  return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);
};