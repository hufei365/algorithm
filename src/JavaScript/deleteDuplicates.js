
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if( !head ) return head;
    let cur = head, next = cur.next;
    while( next ){
        if( next && cur.val === next.val ){
            next = cur.next = next.next;
        } else {
            cur = next;
            next = next.next;
        }
    }
    return head;
};

var cur = head = new ListNode(1);

[1,1,1].forEach( val=>{
    cur.next = new ListNode(val);
    cur = cur.next;
})

console.log(deleteDuplicates( head ));