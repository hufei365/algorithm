/**
 * https://leetcode.cn/problems/split-array-with-same-average/description/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var splitArraySameAverage = function(nums) {
    const n = nums.length;
    const mid = Math.floor(n/2)
    let result = false;
    const sum = nums.reduce((a, b)=>a+b)
    const cache = new Map();

    for(let mask = 0; (1<<mid) > mask; mask++){
        let leftSum=0;
        let leftCount = 0
        for(let i = 0; i < mid; i++){
            if( (1<<i) & mask){
                leftCount++
                leftSum+=nums[i]
            }
        }
        const set = cache.has(leftSum) ? cache.get(leftSum) : new Set()
        set.add(leftCount)
        cache.set(leftSum, set)        
    }
    for(let mask = 0; mask < (1<<(n-mid)); mask++){
        let rightTotal = 0, rightCount = 0;
        for(let i = 0; i < (n-mid); i++){
            if((1<<i) & mask){
                rightTotal+=nums[i+mid]
                rightCount++
            }
        }
        for(let k = Math.max(rightCount, 1); k< n; k++){
            const total = k * sum / n;
            if(cache.has(total-rightTotal) && cache.get(total-rightTotal).has(k-rightCount)){
                result = true;
                break;
            }
        }
        if(result) break;
    }
    
    return result
};