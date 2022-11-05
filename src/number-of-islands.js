/**
 * https://leetcode.cn/problems/number-of-islands/description/?favorite=2cktkvj
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    const m = grid.length, n = grid[0].length;
    const dp = new Array(m).fill(0).map(() => new Array(n));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '0' || dp[i][j] === 1) {
                continue
            }
            startWalk(i, j)
            count++;
        }
    }
    function startWalk(i, j) {
        if (dp[i][j] === 1) return;
        dp[i][j] = 1;
        if (i > 0 && grid[i - 1][j] == 1) {
            startWalk(i - 1, j)
        }
        if (i < m - 1 && grid[i + 1][j] == 1) {
            startWalk(i + 1, j)
        }
        if (j > 0 && grid[i][j - 1] == 1) {
            startWalk(i, j - 1)
        }
        if (j < n - 1 && grid[i][j + 1] == 1) {
            startWalk(i, j + 1)
        }
    }
    return count;
}

const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];
console.log(`The count is : `, numIslands(grid1));

const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
console.log(`The count is : `, numIslands(grid2));
