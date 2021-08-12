/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let n1 = l1, n2 = l2, head = new ListNode(-1);
  var result = head;
  while (n1 !== null && n2 !== null) {
    if (n1.val < n2.val) {
      result.next = n1;
      n1 = n1.next;
    } else {
      result.next = n2;
      n2 = n2.next;
    }
    result = result.next;
  }
  
  if (n1 !== null) {
    result.next = n1;
  }
  if (n2 !== null) {
    result.next = n2;
  }
  return head.next;
};