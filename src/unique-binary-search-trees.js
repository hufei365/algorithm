function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    return getTreeCount(1, n)

    function getTreeCount(min, max){
        if(min === max ){
            return 1
        }
        let results = 0
        
        for(let i = min; i <=max; i++){
            let result = 0, leftCount = 0, rightCount = 0
            
            if(i > min){
                leftCount = getTreeCount(min, i-1)
            }
            if( i < max){
                rightCount = getTreeCount(i+1, max)
            }
            
            if(leftCount && rightCount){
                result += leftCount*rightCount
            } else if(leftCount && rightCount === 0){
                result += leftCount
            } else if(rightCount && leftCount === 0){
                result+=rightCount
            } else {
                result++
            }
            results+=result
        }
        return results
    }
};

console.log(numTrees(19))