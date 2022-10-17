/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }

    function makeBinaryTree(inorder) {
        let len = inorder.length
        if (len === 0) return null
        if (len === 1) return new TreeNode(inorder[0])
        if (len === 2) return new TreeNode(inorder[1], new TreeNode(inorder[0]))
        if (len === 3) return new TreeNode(inorder[1], new TreeNode(inorder[0]), new TreeNode(inorder[2]))

        let mid = Math.floor(len / 2)
        const root = new TreeNode(inorder[mid])
        root.left = makeBinaryTree(inorder.slice(0, mid))
        root.right = makeBinaryTree(inorder.slice(mid + 1))
        return root
    }

    return makeBinaryTree(arr)
};

let case1 = null;
[3,5,8].reduce((a, b) => {
    if (a === null) {
        a = new ListNode(b)
        case1 = a;
    } else {
        a.next = new ListNode(b)
        return a.next
    }
    return a
}, null)

console.log( sortedListToBST(case1))