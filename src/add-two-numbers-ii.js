/**
 * https://leetcode.cn/problems/add-two-numbers-ii/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const arr1 = [], arr2 = [];
    while(l1){
        arr1.push(l1.val)
        l1 = l1.next
    }
    while(l2){
        arr2.push(l2.val)
        l2 = l2.next
    }

    const  result = [];
    let jinwei = 0

    while(arr1.length || arr2.length){
        const x1 = arr1.pop() || 0
        const x2 = arr2.pop() || 0
        const x = x1 + x2 + jinwei
        if(x > 9){
            jinwei = 1
            result.unshift(x-10)
        } else {
            jinwei = 0
            result.unshift(x)
        }
    }
    if(jinwei === 1){
        result.unshift(1)
    }
    const head = new ListNode(result.shift())
    let  cur = head;
    while(result.length){
        const next = new ListNode(result.shift())
        cur.next = next
        cur = next
    }
    return head
};