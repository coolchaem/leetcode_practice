/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let tmp = [], node = head;
  while (node !== null) {
    tmp.push(node);
    node = node.next;
  }
  k %= tmp.length;
  let result = head;
  for (let i = 0; i < k; i++) {
    let cur = tmp.pop();
    cur.next = result;
    result = cur;
  }
  if (tmp.length !== 0) {
    tmp[tmp.length - 1].next = null;
  }  
  return result;
};