/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var preorderTraversal = function(root) {
    if( root === null ) return [];
    let results = [];
    results.push( root.val );
    results = results.concat( preorderTraversal(root.left))
    results = results.concat( preorderTraversal(root.right))
    return results;
};


const elems = [null, 1,null, 2,null, null, 3, 4, null, null, null, null, 5]

for( let i = 1; i<elems.length; i++){
    
    elems[i] = elems[i] !== null ? new TreeNode( elems[i], null, null) : null;
    let parentIndex = i >> 1;
    if( parentIndex ){
        if( elems[parentIndex] === null ) continue;
        if( (i&1) === 0 ){
            elems[parentIndex].left = elems[i]
        } else {
            elems[parentIndex].right = elems[i]
        }
    }
}

console.log( elems[1])
console.log( preorderTraversal( elems[1]))