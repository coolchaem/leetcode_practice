/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let ntmp = needle.split('');
  if (ntmp.length === 0) {
    return 0;
  }
  let tmp = haystack.split('');
  for (let i = 0; i < tmp.length - ntmp.length + 1; i += 1) {
    let match = 0;
    for (let j = i; j < tmp.length && match !== ntmp.length && tmp[j] === ntmp[match]; j += 1) {
      match += 1;
    }
    if (match === ntmp.length) {
      return i;
    }
  }
  return -1;
};