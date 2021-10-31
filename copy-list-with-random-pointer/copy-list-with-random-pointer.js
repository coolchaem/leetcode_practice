/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let node = head, tmp = new Map();
  while (node !== null) {
    tmp.set(node, new Node(node.val));
    node = node.next;
  }
  
  node = head;
  while (node !== null) {
    tmp.get(node).next = node.next !== null ? tmp.get(node.next) : null;
    tmp.get(node).random = node.random !== null ? tmp.get(node.random) : null;
    node = node.next;
  }
  return tmp.get(head);
};