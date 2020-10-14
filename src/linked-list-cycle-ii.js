/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var visited = new Map();
    if( head === null || head.next === null ) return null;
    while( head && !visited.has( head ) ){
        visited.set( head, true );
        head = head.next;
    }
    if( head === null ) return null;
    return head ;
};