/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let result = {};
  strs.forEach(str => {
    let mapper = new Array(26).fill(0);
    for (let i = 0; i < str.length; i += 1) {
      let index = str.charCodeAt(i) - 'a'.charCodeAt();
      mapper[index] += 1;
    }
    let key = mapper.join(',');
    if (result[key] === undefined) {
      result[key] = [];
    }
    result[key].push(str);
  });  
  return Object.values(result);
};