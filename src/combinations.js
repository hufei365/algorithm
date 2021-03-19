/**
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 示例:
 * 输入: n = 4, k = 2
 * 输出:
 * [
 *   [2,4],
 *   [3,4],
 *   [2,3],
 *   [1,2],
 *   [1,3],
 *   [1,4],
 * ]
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/combinations
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const results = [];
    if(n === k){
        const item = [];
        for(let i = 1; i<=n;i++){
            item.push(i);
        }
        results.push(item);
        return results;
    }
    if(k === 1 ){
        let i = 1;
        while( i <= n) {
            results.push([i++]);
        }
    } else {
        combine(n-1, k-1).forEach(v=>{
            v.push(n);
            results.push(v);
        })
        if((n-1) >= k){
            (combine(n-1, k)).forEach(v=>{
                results.push(v);
            })
        }
    }
    return results;
};

console.log( combine(4,2));