/**
 * https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
    const n = nums.length;
    const preSumArr = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        preSumArr[i + 1] = preSumArr[i] + nums[i];
    }
    let res = n + 1;
    const queue = [];
    for (let i = 0; i <= n; i++) {
        const curSum = preSumArr[i];
        while (queue.length != 0 && curSum - preSumArr[queue[0]] >= k) {
            res = Math.min(res, i - queue.shift());
        }
        while (queue.length != 0 && preSumArr[queue[queue.length - 1]] >= curSum) {
            queue.pop();
        }
        queue.push(i);
    }
    return res < n + 1 ? res : -1;
};

shortestSubarray([-28, 81, -20, 28, -29], 89)
shortestSubarray([84, -37, 32, 40, 95], 167)
// shortestSubarray([48, 99, 37, 4, -31], 140)