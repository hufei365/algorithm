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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let curLevel = [root], nextLevel = [];
    const result = []; let curResult = []

    let i = 0;
    while(i < curLevel.length || nextLevel.length){
        if(i < curLevel.length){
            const node = curLevel[i]
            if(node){
                curResult.push(node.val)
                nextLevel.push(node.left)
                nextLevel.push(node.right)
            }
            i++;
        } else {
            result.push(curResult)
            i = 0;
            curLevel = nextLevel
            nextLevel = []
            curResult = []
        }
    }

    return result
};