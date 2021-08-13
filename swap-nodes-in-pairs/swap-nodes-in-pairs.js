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
var swapPairs = function(head) {
  var step = head, prev = new ListNode();
  var result = head !== null && head.next !== null ? head.next : head;
  while (step !== null && step.next !== null){
    var next1 = step.next;
    var next2 = step.next.next;
    
    next1.next = step;
    step.next = next2;
    prev.next = next1;
    
    prev = step;
    step = next2;
  }
  return result;
};