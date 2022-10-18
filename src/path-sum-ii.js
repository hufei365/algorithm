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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    if(root === null ) return []
    if(root && root.left === null && root.right === null ) return root.val === targetSum ? [[root.val]] : []

    const nextTargetSum = targetSum - root.val
    
    let result = [];
    if(root.left){
        const leftResult = pathSum(root.left, nextTargetSum)
        result = result.concat(leftResult.map(item=>{
            item.unshift(root.val)
            return item
        }))
    }
    if(root.right){
        const rightResult = pathSum(root.right, nextTargetSum)
        result = result.concat(rightResult.map(item=>{
            item.unshift(root.val)
            return item
        }))
    }
    return result
};