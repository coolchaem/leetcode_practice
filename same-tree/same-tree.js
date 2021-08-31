/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let pNode = p, qNode = q, pArr = [], qArr = [];
  while ((pNode !== null || pArr.length !== 0) ||
        (qNode !== null || qArr.length !== 0)) {
    while (pNode !== null || qNode !== null) {
      if (pNode === null || qNode === null) {
        return false;
      }
      pArr.push(pNode);
      qArr.push(qNode);
      pNode = pNode.left;
      qNode = qNode.left;
    }
    if (pArr.length !== qArr.length) {
      return false;
    }
    pNode = pArr.pop();
    qNode = qArr.pop();
    if (pNode.val !== qNode.val) {
      return false;
    }
    pNode = pNode.right;
    qNode = qNode.right;
  }
  return pNode === null && qNode === null;
};