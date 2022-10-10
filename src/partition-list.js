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


let head; ([1]).reduce((prevNode, curVal) => {
    let curNode = new ListNode(curVal)
    if (prevNode === null) {
        head = prevNode = curNode

    } else {
        prevNode.next = curNode
    }
    return curNode
}, null)
console.log(head)
/**
* @param {ListNode} head
* @param {number} x
* @return {ListNode}
*/
var partition = function (head, x) {
    let cur = head, prev = head;
    let right = null, left = null, leftHead = null, rightHead = null
    while (cur) {
        if (cur.val >= x) {
            if (right !== null) {
                right.next = cur
            } else {
                rightHead = cur;
            }
            right = cur
            cur = cur.next;
            right.next = null
        } else if (cur.val < x) {
            if (left !== null) {
                left.next = cur
            } else {
                leftHead = cur
            }
            left = cur
            cur = cur.next;
            left.next = null
        }
    }
    if (leftHead) {
        left.next = rightHead
    } else if (rightHead) {
        leftHead = rightHead
    }
    return leftHead
};

const newHead = partition(head, 0)
if (newHead) {
    let cur = newHead;
    while (cur) {
        console.log(cur.val)
        cur = cur.next
    }
}