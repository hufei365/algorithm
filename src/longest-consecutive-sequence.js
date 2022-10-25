/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
    let map = {},
        maxCount = 0;
    nums = new Set(nums);

    for (let value of nums) {
        // 从最小的开始查找
        // 从没有比自己小1的数开始查找连续序列
        // 这样可以单向处理
        if (nums.has(value - 1)) continue;

        let curr = value;
        // 开始逐步生长
        while (nums.has(curr + 1)) {
            nums.delete(curr + 1);
            curr++;
        }
        maxCount = Math.max(maxCount, curr - value + 1);
    }
    // console.log(nums);
    return maxCount;
};

/**
 * 
 */
var longestConsecutive = function (nums) {
    let result = 0;
    const numArr = new Set(nums)
    for( let num of numArr){
    
        let count = 1;

        let next = num - 1
        while (numArr.has(next)) {
            numArr.delete(next)
            count++
            next--
        }
        next = num + 1;
        while (numArr.has(next)) {
            numArr.delete(next)
            count++
            next++
        }
        result = Math.max(result, count)
    }
    return result
};