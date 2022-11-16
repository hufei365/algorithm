/**
 * https://leetcode.cn/problems/unique-paths-iii/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
    let ans = 0;
    let emptyCount = 0;
    const m = grid.length, n = grid[0].length;
    let startPos = null, endPos = null;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                emptyCount++;
            } else if (grid[i][j] === 1) {
                startPos = [i, j]
            } else if (grid[i][j] === 2) {
                endPos = [i, j]
            }
        }
    }

    function startWalk(i, j, paths) {
        if (i < 0 || j < 0 || i >= m || j >= n) return false;
        if (paths.includes(`${i},${j}`)) return false
        if (grid[i][j] === -1) return false;
        if (grid[i][j] === 2) {
            let emptyCellCount = 0;
            paths.forEach((path) => {
                const [x, y] = path.split(',')
                if (grid[x][y] === 0) {
                    emptyCellCount++
                }
            })
            if (emptyCellCount === emptyCount) ans++
            return false;
        }
        startWalk(i - 1, j, [`${i},${j}`, ...paths])
        startWalk(i + 1, j, [`${i},${j}`, ...paths])
        startWalk(i, j - 1, [`${i},${j}`, ...paths])
        startWalk(i, j + 1, [`${i},${j}`, ...paths])
    }
    startWalk(startPos[0], startPos[1], [])
    return ans;
};

const grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]];
uniquePathsIII(grid)