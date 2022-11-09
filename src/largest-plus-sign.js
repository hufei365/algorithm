/**
 * https://leetcode.cn/problems/largest-plus-sign/
 */

/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
    if (n < 2) return 0;
    const grid = new Array(n).fill(0).map(() => new Array(n).fill(1));
    mines.forEach(([x, y]) => {
        grid[x][y] = 0
    })

    let k = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                k = Math.max(k, getDirections(i, j))
            }
        }
    }
    return k

    function getDirections(x, y) {
        let k = 0;
        let left = 0, right = 0, up = 0, bottom = 0;
        let i = x, j = y;
        while (j > 0) {
            if (grid[i][--j] !== 1) {
                break;
            }
            left++
        }
        k = left;
        j = y;
        while (j < n - 1) {
            if (grid[i][++j] !== 1) {
                break;
            }
            right++
            if (right >= k) break;
        }
        k = Math.min(k, right)
        j = y;
        while (i < n - 1) {
            if (grid[++i][j] !== 1) {
                break;
            }
            bottom++
            if (bottom >= k) break;
        }
        k = Math.min(k, bottom)
        i = x;
        while (i > 0) {
            if (grid[--i][j] !== 1) {
                break;
            } else {
                up++
                if (up >= k) break;
            }
        }
        k = Math.min(k, up)
        return k+1;
    }
};

orderOfLargestPlusSign(5, [[4,2]])