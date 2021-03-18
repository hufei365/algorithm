/**
 * 给你单链表的头节点 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * 
 * 示例 1：
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 * 
 * 示例 2：
 * 输入：head = [5], left = 1, right = 1
 * 输出：[5]
 * 
 * 提示：
 * 链表中节点数目为 n
 * 1 <= n <= 500
 * -500 <= Node.val <= 500
 * 1 <= left <= right <= n
 * 
 * 进阶： 你可以使用一趟扫描完成反转吗？
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let i = 1;
    let prev = null, cur = head, next = head.next, before = head, tail = head;
    while(i<left){
        before = cur||head;
        cur = head.next;
        i++;
    }
    tail = cur; next = tail.next; prev = cur; 
    while(i<=right){
        prev = cur;
        cur = next;
        next = next.next;
        cur.next = prev;
        i++;
    }
    if(left>1){
        before.next = prev;
    }

    tail.next = cur;
    if(cur !== null){
        cur.next = next;
    }

    return left > 1 ? head : cur;

};

const head = new ListNode(1);
([2,3,4,5]).reduce((a, b)=>{
    return (a.next = new ListNode(b));
}, head);

console.log(head);

console.log(reverseBetween(head, 2,4));
