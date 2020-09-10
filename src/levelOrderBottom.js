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
var levelOrderBottom = function(root) {
    if( root === null ) return [];
    var nodes = [root], next = [];
    
    var result = [], current = [];
    while( nodes.length ){
        for(var i = 0; i < nodes.length; i++){
            var node = nodes[i];
            current.push(node.val);
            if( node.left ) next.push( node.left );
            if( node.right ) next.push( node.right );
        }
        if( current.length ) result.unshift( current );
        current = [];
        nodes = next;
        next = [];
    }
    return result;
};

function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

function factory( arr ){
    if( arr.length === 0 )return null;
    var tree = new TreeNode(arr[0]);
    var curLevel = [ tree ], nextLevel = [];
    var i = 1;
    
    while( curLevel.length ){
        for(var j = 0 ; j < curLevel.length && i < arr.length; j++){
            var cur = curLevel[j];
            if( arr[i] ){
                cur.left = new TreeNode(arr[i]);
                nextLevel.push( cur.left );
            }
            i++;
            if( arr[i] ){
                cur.right = new TreeNode( arr[i])
                nextLevel.push( cur.right )
            }
            i++;
        }
        curLevel = nextLevel;
        nextLevel = [];
    }
    
    return tree;
}
console.log( factory([1,2,null,3,4,null, 5]))

console.log( levelOrderBottom( factory([1,2,3,4,5,6,7,null,8, null, 9, 10])))