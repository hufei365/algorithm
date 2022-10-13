/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    return generateTree(1, n)

    function generateTree(min, max){
        if(min === max ){
            return [new TreeNode(min)]
        }
        let results = []
        for(let i = min; i <=max; i++){
            let result = [], leftTrees = [], rightTrees = []
            
            if(i > min){
                leftTrees = generateTree(min, i-1)
            }
            if( i < max){
                rightTrees = generateTree(i+1, max)
            }
            
            if(leftTrees.length){
                leftTrees.forEach(leftChild=>{
                    if(rightTrees.length){
                        rightTrees.forEach(rightChild=>{
                            const root = new TreeNode(i)
                            root.left = leftChild;
                            root.right = rightChild
                            result.push(root)
                        })
                    } else {
                        const root = new TreeNode(i)
                        root.left = leftChild;
                        result.push(root)
                    }
                    
                })
            } else if(rightTrees.length){
                rightTrees.forEach(rightChild=>{
                    const root = new TreeNode(i)
                    root.right = rightChild
                    result.push(root)
                })
            } else {
                result.push(root)
            }
            results = results.concat(result)
        }
        return results
    }
};

console.log( generateTrees(1))
console.log( generateTrees(2))
console.log( generateTrees(3))