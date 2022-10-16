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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if(preorder.length === 0 ) return null

    const rootVal = preorder[0]
    const root = new TreeNode(rootVal)
    const rootPos = inorder.indexOf(rootVal)
    if(rootPos > 0){
        const leftinorder = inorder.slice(0, rootPos)
        const leftpreorder = preorder.filter(val => leftinorder.includes(val))
        root.left = buildTree(leftpreorder, leftinorder)
    }
    if(rootPos < (inorder.length - 1)){
        const rightinorder = inorder.slice(rootPos+1)
        const rightpreorder = preorder.filter(val => rightinorder.includes(val))
        root.right = buildTree(rightpreorder, rightinorder)
    }
    return root
};