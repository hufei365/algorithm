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
    var temp = [];
    if( head === null ) return null;
    while( head ){
        temp.push(head);
        head = head.next;
    }
    var pos = temp.length - n;
    if( pos === 0 ){
        return temp[1] || null;
    } else {
        temp[pos-1].next = temp[pos].next;
    }
    return temp[0];
};