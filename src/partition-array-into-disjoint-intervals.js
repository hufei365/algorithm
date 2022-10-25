/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
    const len = nums.length
    let slitPoint = 0, leftMinValueIndex = 0, leftMaxValueIndex = 0, curPointer = 1, globalMaxValueIndex = 0
    while (curPointer < len - 1) {
        if (nums[curPointer] < nums[leftMinValueIndex]) {
            leftMinValueIndex = curPointer
            slitPoint = curPointer
            leftMaxValueIndex = globalMaxValueIndex
        } else if (nums[curPointer] < nums[leftMaxValueIndex]) {
            slitPoint = curPointer
            leftMaxValueIndex = globalMaxValueIndex
        } else {
            globalMaxValueIndex = nums[curPointer] > nums[globalMaxValueIndex] ? curPointer : globalMaxValueIndex
        }
        curPointer++
    }
    return slitPoint + 1
};

//[6,0,8,30,37,6,75,98,39,90,63,74,52,92,64]