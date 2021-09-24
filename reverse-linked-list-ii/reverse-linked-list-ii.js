/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let cur = head, pos = 1;
  
  // find left node
  let lNode = cur;
  while (lNode !== null && pos < left) {
    cur = lNode;
    lNode = lNode.next;
    pos += 1;
  }
  // find right node
  let rNode = lNode;
  while (rNode !== null && pos < right) {
    rNode = rNode.next;
    pos += 1;
  }
  let last = rNode.next;
  
  // reverse
  let nextNode = last;
  while (lNode !== last) {
    let tmp = lNode.next;
    lNode.next = nextNode;
    nextNode = lNode;
    lNode = tmp;
  }
  if (left !== 1) {
    cur.next = nextNode;
  } else {
    return nextNode;
  }
  
  return head;
};