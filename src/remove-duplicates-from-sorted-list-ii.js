/**
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
 *
 * 返回同样按升序排列的结果链表。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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

const head = new ListNode(1)
;[1,2,3,3,4,4,5,5].reduce((a,b)=>{
    const newNode = new ListNode(b);
    a.next = newNode;
    return newNode;
}, head);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var deleteDuplicates = function (head) {
    if (head === null) return null;

    let next = head.next, cur = head, prev = head;
    while (next) {
        let flag = false;
        while (next && next.val === cur.val) {
            next = next.next;
            flag = true;
        }
        if (cur.val === head.val && next !== head.next) {
            prev = head = next;
        } else if(flag === true){
            prev.next = next;
        } else if(flag === false){
            cur.next = next;
            prev = cur;
        }
        cur = next;
        if(next){
            next = next.next;
        }

    }
    return head;

};

let newList = deleteDuplicates(head);

while( newList ){
    console.log(newList.val);
    newList = newList.next;
}