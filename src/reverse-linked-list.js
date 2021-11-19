/*
 * @author: zh.l.y
 * @Date: 2021-11-18 21:45:54
 * @LastEditors: zh.l.y
 * @FilePath: /algorithm/src/reverse-linked-list.js
 * @PM: 
 * @RD: 
 * @description: 
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


const head = [1, 2].reduce((a, b) => {
    return new ListNode(b, a);
}, new ListNode(0));

console.log(head);

var reverseList = function (head) {
    if (head === null) return head;
    if (head.next !== null) {
        let result = reverseList(head.next);
        let tmp = head.next;
        tmp.next = head;
        head.next = null;
        return result;
    } else {
        return head;
    }
};

reverseList(head);
