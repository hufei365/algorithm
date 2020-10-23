/**
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

 * candidates 中的数字可以无限制重复被选取。
 * 
 * 说明：
 * 
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。 
 * 示例 1：
 * 
 * 输入：candidates = [2,3,6,7], target = 7,
 * 所求解集为：
 * [
 *   [7],
 *   [2,2,3]
 * ]
 * 示例 2：
 * 
 * 输入：candidates = [2,3,5], target = 8,
 * 所求解集为：
 * [
 *   [2,2,2,2],
 *   [2,3,3],
 *   [3,5]
 * ]
 *  
 * 提示：
 * 
 * 1 <= candidates.length <= 30
 * 1 <= candidates[i] <= 200
 * candidate 中的每个元素都是独一无二的。
 * 1 <= target <= 500

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/combination-sum
 */

 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let results = [];
    candidates.sort( (a,b)=>a-b);
    for( let i = 0; i < candidates.length; i++){
        if( candidates[i] === candidates[i-1]){
            continue;
        }
        let next = target - candidates[i];
        if( next > 0 ){
            let nextResults = combinationSum( candidates.slice( i ), next);
            if( nextResults.length ){
                results = results.concat( nextResults.map(m=>{
                    m.unshift( candidates[i] );
                    return m;
                }))
            }
        } else if( next === 0 ){
            results.push([candidates[i]])
        }
    } 
    return results;
};




console.log( combinationSum([2,3,6,7], 7) )