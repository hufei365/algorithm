/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    nums.sort((a, b)=>a-b)
    const n = nums.length, results = [];

    for(let mask = 0; mask < (1<<n); mask++){
        const item = [];
        let flag = true
        for(let i = 0; i < n; i++){
            if( mask & (1<<i)){
                if(i > 0 && (mask >> (i - 1) & 1) == 0 && nums[i] == nums[i - 1]) {
                    flag = false;
                    break;
                }
                item.push(nums[i])
            }
        }
        if(flag) results.push(item)
    }
    return results
};

console.log(subsetsWithDup([1,1,1]))
console.log(subsetsWithDup([1,1,2]))