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
var addTwoNumbers = function(l1, l2) {
  let up = 0, dummy = new ListNode();
  let node = dummy;
  while (l1 !== null || l2 !== null) {
    let sum = up;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    up = Math.floor(sum / 10);
    sum = sum % 10;
    node.next = new ListNode(sum);
    node = node.next;
  }
  if (up === 1) {
    node.next = new ListNode(up);
  }
  return dummy.next;
};
