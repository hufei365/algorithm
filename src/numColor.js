/**
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
 var numColor = function(root) {

    const colors = new Set()

    colectColor(root)
    return colors.size

    function colectColor(root){
        if(root){
            colors.add(root.val)
            colectColor(root.left)
            colectColor(root.right)
        }
    }
};