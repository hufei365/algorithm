/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    let head = null, current = null;

    while(lists.length){
        let minVal = null, minValIndex = null;
        const nextLists = []
        for(let i = 0; i < lists.length; i++){
            if(lists[i] === null) continue;
            nextLists.push(lists[i])
            if(minVal === null){
                minVal = lists[i].val
                minValIndex = 0;
            } else {
                if(minVal > lists[i].val){
                    minVal = lists[i].val
                    minValIndex = nextLists.length - 1
                }
            }
        }
        if(minVal === null){
            lists = [];
        } else {
            if(head === null){
                head = nextLists[minValIndex];
                current = head;
            } else {
                current.next = nextLists[minValIndex];
                current = current.next;
            }
            nextLists[minValIndex] = nextLists[minValIndex].next;
            lists = nextLists;
        }
    }
    return head;
}