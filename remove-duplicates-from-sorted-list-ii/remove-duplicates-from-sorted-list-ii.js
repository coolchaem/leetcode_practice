/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let node = head;
  while (node !== null &&  node.next !== null) {
    let slow = node.next, fast = node.next.next;
    while (fast !== null && slow.val === fast.val) {
      fast = fast.next;
    }
    
    if (node.val === slow.val) {
      head = fast;
      node = head;
    } else if (slow.next !== null && slow.next !== fast) {
      node.next = fast;            
    } else {
      node = slow;
    }
  }
  
  return head;
};