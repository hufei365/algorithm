/**
 * 
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    if(head === null ) return true;
    let arr = [];
    while( head ){
        arr.push(head.val)
        head = head.next;
    }
    let i = 0; j = arr.length-1, result = true;
    while( i < j ){
        if( arr[i] !== arr[j] ){
            result = false;
            break;
        }
        i++;j--;
    }

    return result;
};


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
var isPalindrome = function(head) {
    if(head === null ) return true;
    let quick = head, slow = head;
    while( quick ){
        if( quick.next ){
            quick = quick.next;
            if( quick.next ){
                quick = quick.next;
                slow = slow.next;
            }else {
                break;
            }
        } else {
            break;
        }
    }
    let tail = reverseList( slow ), result = true;
    while( head !== slow.next ){
        if( head.val !== tail.val ){
            result = false; break;
        }
        head = head.next;
        tail = tail.next;
    }
    return result;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}


let head = new ListNode(4);
[43,43,4].reduce( (prev, cur)=>{
    prev.next = new ListNode(cur);
    return prev.next;
}, head)

let start = head;

console.log ( isPalindrome( start ))
