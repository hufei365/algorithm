// 打家劫舍问题
// https://leetcode-cn.com/problems/house-robber/
// const arr = [226, 174, 214, 16, 218, 48, 153, 131, 128, 17, 157, 142, 88, 43, 37, 157, 43, 221, 191, 68, 206, 23, 225, 82, 54, 118, 111, 46, 80, 49, 245, 63, 25, 194, 72, 80, 143, 55, 209, 18, 55, 122, 65, 66, 177, 101, 63, 201, 172, 130, 103, 225, 142, 46, 86, 185, 62, 138, 212, 192, 125, 77, 223, 188, 99, 228, 90, 25, 193, 211, 84, 239, 119, 234, 85, 83, 123, 120, 131, 203, 219, 10, 82, 35, 120, 180, 249, 106, 37, 169, 225, 54, 103, 55, 166, 124];
// const arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const arr = [1,2,3,4,5,6,7,8]
/**
 * 纯递归的方式
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const memo = Object.create(null);

    function getMax(nums) {
        if (!Array.isArray(nums)) return -1;
        const len = nums.length;
        if (len === 0) return 0;
        if (len === 1) return nums[0];
        if (len === 2) return Math.max(nums[0], nums[1]);
        if (memo[len] !== undefined) return memo[len];
        return memo[len] = Math.max(nums[0] + getMax(nums.slice(2)), nums[1] + getMax(nums.slice(3)))
    }

    return getMax(nums);
};

rob = function (nums) {
    if (!Array.isArray(nums)) return -1;
    if (len === 0) return 0;
    const memo = new Array(len);
    memo[0] = arr[0];
    memo[1] = arr[1];
    for (let i = 2; i < len; i++) {
        memo[i] = Math.max(memo[i - 2] + nums[i], memo[i - 1])
    }
    return memo[len - 1]
};


console.log(rob(arr))
