/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let traversedState = { none: 0, left: 1, both: 2 }, result = null, stack = [], oneFound = false, childNode = null;
  stack.push([root, traversedState.none]);
  
  while (stack.length !== 0) {
    let top = stack[stack.length - 1];
    let parentNode = top[0], parentState = top[1];
    
    if (parentState !== traversedState.both) {
      if (parentState === traversedState.none) {
        if (parentNode === p || parentNode === q) {
          if (oneFound) {
            return result;
          } else {
            oneFound = true;
            result = stack[stack.length - 1][0];
          }
        }
        childNode = parentNode.left;
      } else {
        childNode = parentNode.right;
      }
      
      stack.pop();
      stack.push([parentNode, parentState + 1]);
      
      if (childNode !== null) {
        stack.push([childNode, traversedState.none]);
      }
    } else {
      if (result === stack.pop()[0] && oneFound) {
        result = stack[stack.length - 1][0];
      }
    }
  }
  return null;  
};