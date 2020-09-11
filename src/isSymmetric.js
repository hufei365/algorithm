/**
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
var isSymmetric = function(root) {
    let left, right;
    return _isSymmetric( root, root )
    

    function _isSymmetric(left, right){
        if( left === null && right === null ) return true;
        if( left === null || right === null) return false;
        if( left.val === right.val ) return _isSymmetric( left.left, right.right) && _isSymmetric( left.right , right.left )
        return false;
    }
};

function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

var initData = [1,2,2];
var tree = null;

for(let i = 0; i < initData.length; i+=3){
    tree = new TreeNode(initData[i]);
    tree.left = new TreeNode( initData[i+1]);
    tree.right = new TreeNode( initData[i+2])
}

console.log( isSymmetric( tree ) );