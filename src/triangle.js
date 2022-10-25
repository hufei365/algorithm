/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function (triangle) {
    const n = triangle.length;
    const dp = Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
};

/**
 * 这种方法时间太长了
 */
var minimumTotal = function (triangle) {
    const memo = Object.create(null)
    const n = triangle.length

    function doTotal(i, j) {
        if (memo[`${i}_${j}`]) {
            return memo[`${i}_${j}`]
        }
        if (i === (n - 1)) return triangle[i][j]
        let subSum = 0
        if (i < (n - 1)) {
            subSum = Math.min(doTotal(i + 1, j), doTotal(i + 1, j + 1))
        }
        memo[`${i}_${j}`] = triangle[i][j] + subSum
        return memo[`${i}_${j}`]
    }
    return doTotal(0, 0)

};