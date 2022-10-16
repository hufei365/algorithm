/**
 * https://leetcode.cn/problems/possible-bipartition/
 * 
 */

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
    const len = dislikes.length
    if(len === 0 ) return true
    let result = true

    const memo = Object.create(null)
    const color = Object.create(null)
    
    const [x, y] = dislikes[0]
    color[x] = false;
    color[y] = true;
    memo[x] = [y]
    memo[y] = [x]

    for (let i = 1; i < len; i++) {
        const [x, y] = dislikes[i]
        if(color[x] !== undefined ){
            if(color[y] === undefined){
                color[y] = !color[x]
            } else {
                if(color[y] === color[x]){
                    result = false;
                    break;
                }
            }
        }


        if (memo[x] === undefined) memo[x] = []
        if (memo[y] === undefined) memo[y] = []

        memo[x].push(y), memo[y].push(x)

        if (Object.keys(memo).some((k) => {
            const together = memo[k]
            return together.includes(x) && together.includes(y)
        })) {
            result = false;
            break;
        }
    }    
  
    return result
};


console.log(possibleBipartition(10, [[6, 9], [1, 3], [4, 8], [5, 6], [2, 8], [4, 7], [8, 9], [2, 5], [5, 8], [1, 2], [6, 7], [3, 10], [8, 10], [1, 5], [3, 6], [1, 10], [7, 9], [4, 10], [7, 10], [1, 4], [9, 10], [4, 6], [2, 7], [6, 8], [5, 7], [3, 8], [1, 8], [1, 7], [7, 8], [2, 4]]))
console.log(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]]))