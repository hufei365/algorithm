/**
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if(k === 1) return head;
    let newHead = null;
    let current = head, count = 1;
    current.last = null;
    let globalLast = null, globalNext = null, last = null;
    while (current) {
        current.last = last;
        if (count === k) {
            globalNext = current.next;
            let _last = current.last
            if (newHead === null) {
                globalLast = current;
                newHead = current;
            } else {
                globalLast.next = current
            }
            while (_last) {
                current.next = _last;
                current.last = null;
                _last.next = null;
                globalLast = _last;
                current = _last;
                _last = _last.last;
            }
            count = 0;
            current = globalNext;
            globalLast.next = current;
            last = null;
            count++;
        } else {
            last = current;
            current = current.next;
            count++;
        }
    }
    return newHead
};

const head = [1,2,3,4,5].reverse().reduce((a, b)=>{
    const node = new ListNode(b)
    node.next = a;
    return node;
}, null)

function logLinkList(head){
    while(head){
        console.log(head.val)
        head = head.next;
    }
}

console.log(head)

reverseKGroup(head, 1)