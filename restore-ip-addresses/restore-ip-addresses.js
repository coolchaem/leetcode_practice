/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  // Invalid IP
  if (s.length < 4 || s.length > 12) {
    return [];
  }
  
  let result = [];
  for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
      for (let c = 1; c <= 3; c++) {
        for (let d = 1; d <= 3; d++) {
          if (a + b + c + d === s.length) {
            let aStr = +s.substring(0, a), bStr = +s.substring(a, a+b), cStr = +s.substring(a+b, a+b+c), dStr = +s.substring(a+b+c);
            if ( aStr <= 255 && bStr <= 255 && cStr <= 255 && dStr <= 255) {
              let ip = aStr.toString() + '.' + bStr.toString() + '.' + cStr.toString() + '.' + dStr.toString();
              if (ip.length - 3 === s.length) {
                result.push(ip);            
              }              
            }
          }              
        }
      }
    }
  }
  
  return result;  
};