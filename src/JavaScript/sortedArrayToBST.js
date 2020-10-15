/**
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if( nums.length === 0 ) return null;
    var len = nums.length,
        mid = len>>1;
    var tree = new TreeNode( nums[mid] );
    tree.left = sortedArrayToBST( nums.slice(0, mid));
    tree.right = sortedArrayToBST( nums.slice(mid+1));
    return tree;
};


function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

console.log( sortedArrayToBST([]))
console.log( sortedArrayToBST([1]))
console.log( sortedArrayToBST([1,2]))
console.log( sortedArrayToBST([1,2,3]))