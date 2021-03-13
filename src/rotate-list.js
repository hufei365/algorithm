/**
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

 * 示例 1:
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL

 * 示例 2:
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/rotate-list
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    if(head===null || k === 0 || head.next === null) return head;
    let last = head, len = 2, first = true;
    
    while(k > 0){
        doRotate(last);console.log(last);

        if(first){
            first = false;
            k--;
            k = k % len;
        } else {
            k--;
        }
    }
    function doRotate(head){
        let p = head;
        while(p.next.next !== null){
            if(first){
                len++;
            }
            p = p.next;
        }
        _last = p.next;
        _last.next = head;
        p.next = null;
        last = _last;
    }

    return last;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const last = new ListNode(3, null);
const two = new ListNode(2, last);
const head = new ListNode(1, two);

console.log(head);
console.log( rotateRight(head, 2));