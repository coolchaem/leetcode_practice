/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let tmp = [];
  path.split('/').forEach(dir => {
    if (dir === "..") {
      tmp.pop();      
    } else if (dir === "." || dir === "") {
      // nothing
    } else {
      tmp.push(dir);
    }
  });
  let result = tmp.length === 0 ? "/" : "";
  tmp.forEach(dir => {result = result + "/" + dir});
  return result;
};