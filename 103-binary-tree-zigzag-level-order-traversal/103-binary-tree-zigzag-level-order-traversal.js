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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (root === null) return [];
  
  let result = [], level = 1, arr = []
  arr.push(root);
  while (arr.length) {
    let nextArr = [];    
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].left && nextArr.push(arr[i].left);
      arr[i].right && nextArr.push(arr[i].right);
    }

    let val = [];
    if (level % 2 == 0) {
      for (let i = arr.length - 1; i >= 0; i -= 1) {
        val.push(arr[i].val);
      }
    } else {
      for (let i = 0; i < arr.length; i += 1) {
        val.push(arr[i].val);
      }
    }
    result.push(val);
    arr = nextArr;
    level += 1;
  }
  return result;
};