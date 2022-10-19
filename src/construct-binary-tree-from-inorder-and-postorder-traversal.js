/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (postorder.length === 0) return null

    const rootVal = postorder[postorder.length - 1]
    const root = new TreeNode(rootVal)
    const rootPos = inorder.indexOf(rootVal)
    if (rootPos > 0) {
        const leftinorder = inorder.slice(0, rootPos)
        const leftpostorder = postorder.filter(val => leftinorder.includes(val))
        root.left = buildTree(leftinorder, leftpostorder)
    }
    if (rootPos < (inorder.length - 1)) {
        const rightinorder = inorder.slice(rootPos + 1)
        const rightpostorder = postorder.filter(val => rightinorder.includes(val))
        root.right = buildTree(rightinorder, rightpostorder)
    }
    return root
};