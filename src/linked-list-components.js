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


let head; ([0, 1, ,2, 3]).reduce((prevNode, curVal) => {
    let curNode = new ListNode(curVal)
    if (prevNode === null) {
        head = prevNode = curNode

    } else {
        prevNode.next = curNode
    }
    return curNode
}, null)
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
 var numComponents = function(head, nums) {
    let count = 0;

    let cur = start = head;
    while(cur){
        while(start && nums.includes(start.val)){
            start = start.next
        }
        if(cur !== start ){
            cur = start
            count++
        } else {
            cur = cur.next
            start = cur
        }
    }

    return count
};

console.log(numComponents(head, [0,1,3]))