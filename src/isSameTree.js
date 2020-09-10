/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if( q === null && p === null ) {
        return true;
    } else if( q === null || p === null) {
        return false;
    } else if(p.val !== q.val){
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var initData1 = [1], initData2 = [1];

function generateTree(initData){
    var tree = null;
    for(let i = 0; i < initData.length; i+=3){
        let left = new TreeNode(initData[i+1]);
        let right = new TreeNode(initData[i+2]);
        tree = new TreeNode( initData[i], left, right)
    }
    return tree;
}

console.log( isSameTree( generateTree(initData1), generateTree(initData2)) );

