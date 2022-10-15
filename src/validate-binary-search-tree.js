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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {

    function isValidBSTree(node, father, grandFather = [], isLeft) {
        if (node === null || father === undefined) return true;
        let result = (isLeft ? node.val < father : node.val > father) && grandFather?.length && grandFather.every(item => item.isLeft ? item.val > node.val : item.val < node.val)

        if (result === false) return false;
        return isValidBSTree(node.left, node.val, grandFather.concat([{
            val: father,
            isLeft,
        }]), true) &&
            isValidBSTree(node.right, node.val, grandFather.concat([{
                val: father,
                isLeft,
            }]), false)
    }

    return root && isValidBSTree(root.left, root.val, [], true) &&
        isValidBSTree(root.right, root.val, [], false)
};

// [98,-57,null,null,58,31]
const node58 = new TreeNode(58, new TreeNode(31))
const node_57 = new TreeNode(-57, null, node58)
const root1 = new TreeNode(98, node_57)

// [3,1,5,0,2,4,6]
const leftChild = new TreeNode(1, new TreeNode(0), new TreeNode(2))
const rightChild = new TreeNode(5, new TreeNode(4), new TreeNode(6))
const root = new TreeNode(3, leftChild, rightChild)

console.log(isValidBST(root1))


/** 中序遍历 */
function traverse(root){
    if(root){
        return traverse(root.left).concat([root.val], traverse(root.right))
    } else {
        return []
    }
}
