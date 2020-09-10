/**
 * https://leetcode-cn.com/problems/balanced-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if( root === null) return true;

    return isBalanced( root.left) && isBalanced(root.right) && Math.abs(getMaxDepth(root.left) - getMaxDepth(root.right )) <= 1
};

function getMaxDepth(root){
    if( root === null ) return 0;
    return Math.max( 1+getMaxDepth(root.left), 1+getMaxDepth(root.right))
}