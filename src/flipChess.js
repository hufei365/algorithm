/**
 * https://leetcode.cn/problems/fHi6rV/description/?envType=study-plan&id=lccup-2021-fall&plan=lccup&plan_progress=4tnynkm
 * 
 * 
 */

/**
解题思路
第一种  暴力破解法
找到所有可能触发白棋改变颜色的落子点，然后计算可以改变颜色的白气数量

能触发白棋改变颜色的落子点，必然与白棋相邻（上下，左右， 对角线）

落子后，计算其影响的行/列/对角线，是否有白色棋子的颜色需要改变；
如果无， 则结果记为 0；
如果有，记录改变颜色的白棋坐标，并推入数组queue(存放变为黑棋的点)
 */

/**
 * @param {string[]} chessboard
 * @return {number}
 */
var flipChess = function (chessboard) {
    const m = chessboard.length, n = chessboard[0].length;
    let dp, count = 0, target = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 可以落子
            if (isAvailablePoint(i, j)) {
                let newCount = 0;
                dp = new Array(m).fill(0).map(() => new Array(n))
                const nodes = getSiblingWhite(i, j);
                newCount = nodes.length;
                console.log(`\n\n\ni: ${i}, j: ${j}`, nodes)
                // 开启第二轮扫描
                while (nodes.length) {
                    const [i, j] = nodes.pop();
                    const newNodes = getSiblingWhite(i, j)
                    newCount += newNodes.length
                    if (newNodes.length) {
                        newNodes.forEach((item) => {
                            nodes.push(item)
                        })
                    }
                    console.log(nodes)
                }
                if (newCount > count) {
                    target = [i, j]
                }
                count = Math.max(count, newCount)

            }
        }
    }
    console.log(`The count is ${count} and target is `, target)
    return count

    function isAvailablePoint(i, j) {
        if (!isEmptyPoint(i, j)) return false;
        let isAvailable = false;
        if (i > 0 && isWhitePoint(i - 1, j)) return true
        if (i < m - 1 && isWhitePoint(i + 1, j)) return true
        if (j > 0 && isWhitePoint(i, j - 1)) return true
        if (j < n - 1 && isWhitePoint(i, j + 1)) return true
        if (i > 0 && j > 0 && isWhitePoint(i - 1, j - 1)) return true
        if (i < m - 1 && j > 0 && isWhitePoint(i + 1, j - 1)) return true
        if (i > 0 && j < n - 1 && isWhitePoint(i - 1, j + 1)) return true
        if (i < m - 1 && j < n - 1 && isWhitePoint(i + 1, j + 1)) return true
        return isAvailable
    }

    // 获取可以改变颜色的白色棋子组合
    function getSiblingWhite(i, j) {

        let nodesLeft = [], x = j, hasBlackPoint = false
        // 行左方向
        while (--x >= 0) {
            if (isEmptyPoint(i, x)) {
                break;
            } else if (isBlackPoint(i, x)) {
                hasBlackPoint = true;
                break;
            } else {
                nodesLeft.push([i, x])
            }
        }
        if (!hasBlackPoint) {
            nodesLeft = []
        }
        // 行右方向
        let nodesRight = [];
        x = j; hasBlackPoint = false;
        while (++x < n) {
            if (isEmptyPoint(i, x)) {
                break;
            } else if (isBlackPoint(i, x)) {
                hasBlackPoint = true;
                break;
            } else {
                nodesRight.push([i, x])
            }
        }
        if (!hasBlackPoint) {
            nodesRight = []
        }
        // 行上方向
        let nodesUp = [];
        x = i; hasBlackPoint = false;
        while (--x >= 0) {
            if (isEmptyPoint(x, j)) {
                break;
            } else if (isBlackPoint(x, j)) {
                hasBlackPoint = true;
                break;
            } else {
                nodesUp.push([x, j])
            }
        }
        if (!hasBlackPoint) {
            nodesUp = []
        }
        // 行下方向
        let nodesDown = [];
        x = i; hasBlackPoint = false;
        while (++x < m) {
            if (isEmptyPoint(x, j)) {
                break;
            } else if (isBlackPoint(x, j)) {
                hasBlackPoint = true;
                break;
            } else {
                nodesDown.push([x, j])
            }
        }
        if (!hasBlackPoint) {
            nodesDown = []
        }

        // 行左上
        let nodesLeftUp = [], y = i;
        x = j; hasBlackPoint = false;
        while (--x >= 0 && --y >= 0) {
            if (isEmptyPoint(y, x)) {
                break;
            } else if (isBlackPoint(y, x)) {
                hasBlackPoint = true;
                break;
            } else {
                nodesLeftUp.push([y, x])
            }
        }
        if (!hasBlackPoint) {
            nodesLeftUp = []
        }

        // 右上
        let nodesRightUp = [];
        y = i;
        x = j; hasBlackPoint = false;
        while (--x >= 0 && ++y < m) {
            if (isEmptyPoint(y, x)) {
                break;
            } else if (isBlackPoint(y, x)) {
                hasBlackPoint = true;
                break;
            } else {
                nodesRightUp.push([y, x])
            }
        }
        if (!hasBlackPoint) {
            nodesRightUp = []
        }

        // 左下
        let nodesLeftDown = []; y = i;
        x = j; hasBlackPoint = false;
        while (++x < n && --y >= 0) {
            if (isEmptyPoint(y, x)) {
                break;
            } else if (isBlackPoint(y, x)) {
                hasBlackPoint = true;
                break;
            } else {
                nodesLeftDown.push([y, x])
            }
        }
        if (!hasBlackPoint) {
            nodesLeftDown = []
        }

        // 右下
        let nodesRightDown = []; y = i;
        x = j; hasBlackPoint = false;
        while (++x < n && ++y < m) {
            if (isEmptyPoint(y, x)) {
                break;
            } else if (isBlackPoint(y, x)) {
                hasBlackPoint = true;
                break;
            } else {
                nodesRightDown.push([y, x])
            }
        }
        if (!hasBlackPoint) {
            nodesRightDown = []
        }


        const result = [].concat(nodesLeft, nodesLeftDown, nodesDown, nodesRightDown, nodesRight, nodesRightUp, nodesUp, nodesLeftUp)
        const uniqueResult = result.filter(([x, y]) => {
            if (dp[x][y] === undefined) {
                dp[x][y] = 1; // 记录改变颜色的点
                return [x, y]
            }
        })
        return uniqueResult;
    }

    function isWhitePoint(i, j) {
        return chessboard[i][j] === 'O'
    }
    function isBlackPoint(i, j) {
        return chessboard[i][j] === 'X'
    }
    function isEmptyPoint(i, j) {
        return chessboard[i][j] === '.'
    }
}

flipChess(["...", "...", "...", "X..", ".O.", "..."])
// flipChess([".O.....",".O.....","XOO.OOX",".OO.OO.",".XO.OX.","..X.X.."])
// flipChess([".X.",".O.","XO."])
// flipChess(["....X.","....X.","XOOO..","......","......"])
// flipChess([".......",".......",".......","X......",".O.....","..O....","....OOX"])