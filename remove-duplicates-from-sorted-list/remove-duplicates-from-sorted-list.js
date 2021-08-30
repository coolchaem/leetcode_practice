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
  let node = head, mapper = {}, prev = null;
  while (node !== null) {
    if (mapper[node.val] !== undefined) {
      prev.next = node.next;
    } else {
      mapper[node.val] = true;
      prev = node;
    }
    node = node.next;
  }
  return head;
};