/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let left = new ListNode(), right = new ListNode();
  let lhead = left, rhead = right;
  while (head !== null) {
    if (head.val < x) {
      left.next = head;
      left = left.next;
    } else {
      right.next = head;
      right = right.next;
    }
    head = head.next;
  }
  
  right.next = null;
  left.next = rhead.next;
  return lhead.next;
};