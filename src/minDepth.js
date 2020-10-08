/**
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;
    if( root.left !== null && root.right !== null) return Math.min( 1+minDepth( root.left), 1+minDepth(root.right))
    if( root.left === null ) return minDepth(root.right)+1;
    if( root.right === null ) return minDepth(root.left)+1;
};