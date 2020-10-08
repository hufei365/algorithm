/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (root === null) return [];

    var result = [[root.val]];

    traverse(root);
    return result;

    function traverse(root) {
        var next = [];
        if (root.left) next.push(root.left.val);
        if (root.right) next.push(root.right.val);
        if (next.length) result.unshift(next);
        if (root.right) traverse(root.right)
        if (root.left) traverse(root.left)
    }
};

function TreeNode( val ){
    this.val = val;
    this.left = this.right = null;
}

function factory( arr ){
    var tree = null;
    var i = 0;
    var curLevels = [tree];
    while( i < arr.length ){
        current = new TreeNode(arr[i]);
    }
    for(var i = 0; i < arr.length; i++){
        tree = new TreeNode(arr[i]);
        tree.left = new TreeNode(arr[i+1]);
        tree.right = new TreeNode(arr[i+2])
    }    
}
