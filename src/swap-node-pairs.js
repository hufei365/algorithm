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
var swapPairs = function (head) {
    if (!head || head.next === null) return head;

    let prev = null, current = head, next = head.next;

    head.next = next.next;
    next.next = head;

    prev = head;
    head = next;
    current = prev.next;

    while( current && current.next ){
        prev.next = next = current.next;
        current.next = next.next;
        prev = next.next = current;
        current = prev.next;
    }
    
    return head;
};