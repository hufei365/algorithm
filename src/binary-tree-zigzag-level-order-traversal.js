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
 var zigzagLevelOrder = function(root) {
    let curLevel = [root], nextLevel = [];
    const result = []; let curResult = []

    let i = 0, left2Right = true;
    while(i < curLevel.length || nextLevel.length){
        if( i < curLevel.length){
            const node = curLevel[i]
            if(node){
                curResult.push(node.val)
                if(left2Right){
                    nextLevel.unshift(node.left)
                    nextLevel.unshift(node.right)
                } else {
                    nextLevel.unshift(node.right)
                    nextLevel.unshift(node.left)
                }
            }
            i++
        } else {
            result.push(curResult)
            i = 0;
            left2Right = !left2Right
            curLevel = nextLevel
            nextLevel = []
            curResult = []
        }
    }

    return result
};