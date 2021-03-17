/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

 * 示例:
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 
 * 说明:
 * 假设你总是可以到达数组的最后一个位置。

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/jump-game-ii
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const len = nums.length;
    if (len === 1) return 0;
    const dp = (new Array(len)).fill(Number.MAX_SAFE_INTEGER);

    let tail = len - 2;
    while (tail > -1) {
        let maxStep = nums[tail];
        if (maxStep < (len - tail - 1)) {
            const nextSteps = [];
            for (let i = 1; i <= maxStep; i++) {
                nextSteps.push(dp[tail + i]);
            }
            dp[tail] = Math.min.apply(null, nextSteps) + 1;
        } else {
            dp[tail] = 1;
        }
        tail--;
    }

    return dp[0];
};

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([1, 4])); // 1
console.log(jump([1, 2, 3])); // 2
console.log(jump([5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5]));