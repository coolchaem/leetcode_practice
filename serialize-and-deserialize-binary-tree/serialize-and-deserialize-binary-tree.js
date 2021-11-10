/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let result = '';
  let traverse = (node) => {
    if (node === null) {
      result += 'null,'
    } else {
      result += node.val + ',';
      traverse(node.left);
      traverse(node.right);
    }
  };
  traverse(root);
  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let tmp = data.split(','), i = 0;
  console.log(tmp);
  let parse = () => {
    if (i >= tmp.length - 1) return null;
    console.log(i + ', ' + tmp.length + ', ' + tmp[i]);
    let node = new TreeNode(tmp[i]);
    if (tmp[i] !== 'null') {
      node.left = parse(++i);
      node.right = parse(++i);
    } else {
      return null;
    }
    return node;
  }
  return parse();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */