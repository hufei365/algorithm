
var reverseList = function(head) {
    if( head === null || head.next === null ) return  head;

    let prev = head, cur = head.next, next=null;
    head.next = null;
    while( cur ){
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head = new ListNode(4);
[5,6,7,8,9].reduce( (prev, cur)=>{
    prev.next = new ListNode(cur);
    return prev.next;
}, head)

let start = head;
while( start ){
    console.log( start.val );
    start = start.next;
}
let result =  reverseList(head);
while( result ){
    console.log( result.val );
    result = result.next;
}