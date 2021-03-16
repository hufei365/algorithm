/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

 * 说明：每次只能向下或者向右移动一步。

 * 示例 1：
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。

 * 示例 2：
 * 输入：grid = [[1,2,3],[4,5,6]]
 * 输出：12
 
 * 提示：
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 200
 * 0 <= grid[i][j] <= 100

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/minimum-path-sum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(m);
    for(let i = 0; i<m; i++){
        dp[i] = new Array(n);
    }
    dp[0][0] = grid[0][0];
    for(let top = 1; top < m; top++){
        dp[top][0] = dp[top-1][0] + grid[top][0];
    }
    for(let left = 1; left < n; left++){
        dp[0][left] = grid[0][left] + dp[0][left-1];
    }
    for(let top = 1; top < m; top++){
        for(let left = 1; left < n; left++){
            dp[top][left] = grid[top][left] + ((dp[top-1][left] > dp[top][left-1]) ? dp[top][left-1] : dp[top-1][left]);
        }
    }
    return dp[m-1][n-1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])) // 7
console.log(minPathSum([[1,2,3],[4,5,6]])) // 12