/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * 示例 2：
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 提示：
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * nums 中的所有元素 互不相同
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/subsets
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 递归法
 */
var subsets = function (nums) {
    function doWalk(subArr){
        const subResults = [];
        const len = subArr.length;
        subResults.push([subArr[0]]);
        if(len > 1){
            doWalk(subArr.slice(1)).forEach(v=>{
                subResults.push(v);
                subResults.push( [].concat(v, [subArr[0]]))
            })
        }
        return subResults;
    }
    const results = doWalk(nums);
    results.push([])
    
    return results;
};

/**
 * 穷举法
 */

function subsets2(nums){
    const n = nums.length, results = [];

    for(let mask = 0; mask < (1<<n); mask++){
        const item = [];
        for(let i = 0; i < n; i++){
            if( mask & (1<<i)){
                item.push(nums[i])
            }
        }
        results.push(item)
    }
    return results
}

console.log(subsets([1,2,3]));