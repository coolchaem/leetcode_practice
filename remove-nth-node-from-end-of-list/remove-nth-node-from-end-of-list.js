/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let node = head, len = 0;
  while (node !== null) {
    len += 1;
    node = node.next;
  }
  let index = len - n, i = 0;
  if (index === 0 || len === 1) return head.next;
  node = head;
  while (i < index - 1) {
    node = node.next;
    i += 1;    
  }
  
  node.next = node.next.next;
  return head;
};