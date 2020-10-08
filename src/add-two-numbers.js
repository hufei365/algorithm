/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let addOne = 0, r = cur = null;
    while( l1 !== null || l2 !== null || addOne === 1){
        let v = addOne;
        if( l1 !== null ){
            v += l1.val;
            l1 = l1.next;
        }
        if( l2 !== null ){
            v += l2.val;
            l2 = l2.next;
        }
        
        if( cur === null ){
            r = cur = new ListNode(v%10);
        } else {
           cur.next = new ListNode(v%10);
           cur=cur.next;
        }
        addOne = v > 9 ? 1 : 0;
    }
    return r;
};

function ListNode(val){
    this.val = val;
    this.next = null;
}

var l1 = new ListNode(5);
var l2 = new ListNode(5);

console.log( addTwoNumbers(l1, l2 ));