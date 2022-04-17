/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  const validate = function(node, lower, higher) {
    if (node === null) return true;
    if (lower && lower.val >= node.val) {
      return false;
    }
    if (higher && higher.val <= node.val) {
      return false;
    }
    return validate(node.left, lower, node) && validate(node.right, node, higher);
  }
  return validate(root, null, null);
};