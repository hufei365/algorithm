/**
 * https://leetcode.cn/problems/fsa7oZ/?envType=study-plan&id=lccup-2021-fall&plan=lccup&plan_progress=4tnynkm
 * 棋盘中的棋子分布信息记录于二维数组 pieces 中，其中 pieces[i] = [x,y,color] 表示
 * 第 i 枚棋子的横坐标为 x，纵坐标为 y，棋子颜色为 color(0 表示黑棋，1 表示白棋)。
 * 假如黑棋先行，并且黑棋和白棋都按最优策略落子，
 * 请你求出当前棋局在三步（按 黑、白、黑 的落子顺序）之内的输赢情况（三步之内先构成同行、列或对角线连续同颜色的至少 5 颗即为获胜）：
    - 黑棋胜, 请返回 "Black"
    - 白棋胜, 请返回 "White"
    - 仍无胜者, 请返回 "None"

    注意：
        和传统的五子棋项目不同，「力扣挑战赛」中的「五子棋」项目 不存在边界限制，即可在 任意位置 落子；
        黑棋和白棋均按 3 步内的输赢情况进行最优策略的选择
        测试数据保证所给棋局目前无胜者；
        测试数据保证不会存在坐标一样的棋子。
*/

/**
 * 黑棋若一步则可以获胜，则直接走
 * 黑棋若两步可以获胜，则
 * 白棋可一步获胜
 * 黑棋和白棋均不能获胜
 * 
 * 黑棋的落子策略
 *  1. 保证自己两步之内可以赢&&第一步落子后，白棋无法赢棋
 * 
 * 白棋落子策略
 *  1. 保证落子后，白棋可以赢棋；
 *  2. 若无法满足1， 则确保落子后，黑棋无法赢棋；
 * 
 * 
 * 两个绝对理性的棋手，从程序的角度来讲，就是找出对方无论如何走棋，己方都必胜的落子位置；
 * 如果找不到，则找一个对方无法赢棋的步骤，
 * 
 * 假如我落在位置[i, j], 可以确保下一步可以赢棋的落子点至少有两个，且白棋没有可以赢棋的落子点，则自己能赢；
 * 
 * 
 * 黑棋先行
 * 先查找白棋赢棋的落子点数量count，
 *  1. 如果 count === 1， 则黑棋落子为该点；
 *  2. 如果 count > 1, 则返回白棋赢棋结果；
 *  3. 如果 count === 0, 则寻找自己两步之内可以赢棋的落子点数量 count1;
 * 
 */
var globalBoard = null


/**
 * @param {number[][]} pieces
 * @return {string}
 */
var gobang = function (pieces) {
    const NONE = 'None', BLACK = 'Black', WHITE = 'White', SUCCESS_COUNT = 5,
        WHITEDOT = 1, BLACKDOT = 0;

        const threshold = 2;
        let xVal = threshold, yVal = threshold;
    // 棋盘
    // let board = new Array(0).fill(0).map(() => new Array(0))
    const board = preHandle(pieces)
    let whiteCount = 0, blackCount = 0;
    // initBoard
    pieces.forEach(initBoard)
    globalBoard = board;
    // 根据目前棋子数量，判断一下
    if (blackCount < 3 && whiteCount < 4) return NONE;
    const M = board.length, N = board[0].length;

    const blackNextSteps = findNextStep(BLACKDOT, board, {
        left: 0, 
        right: N,
        up: 0,
        bottom: M
    })
    if(blackNextSteps.length > 0) return BLACK
    const whiteNextSteps = findNextStep(WHITEDOT, board, {
        left: 0, 
        right: N,
        up: 0,
        bottom: M
    })
    if (whiteNextSteps.length > 1) return WHITE;
    // 黑棋下一步的走法
    if (whiteNextSteps.length === 1) {
        const [p, x, y] = whiteNextSteps[0].split('_');
        const newBoard = copyBoard()
        newBoard[x][y] = 0; // 黑棋第一步落子位置

        const blackNextSteps = findNextStep(BLACKDOT, newBoard, {
            left: 0, 
            right: N,
            up: 0,
            bottom: M
        })
        return blackNextSteps.length > 1 ? BLACK : NONE
    } else {
        // 白棋不可能赢的情况，找出黑棋第一步落子后，是否可以获得至少两个赢棋点位（黑棋第二步的落子点）
        // 如果能获得至少两个，则黑棋胜
        // 如果最多能获得一个，则平局
        let result = NONE
        for (let i = 0; i < M; i++) {
        let left = 0, right = N, up = 0, bottom = M;
            up = Math.max(left, i - 5)
            bottom = Math.min(bottom, i + 5)
            for (let j = 0; j < N; j++) {
                right = N, left = 0;
                if (board[i][j] === undefined) {
                    const newBoard = copyBoard()
                    newBoard[i][j] = 0;
                    left = Math.max(left, j - 5)
                    right = Math.min(right, j + 5)
                    const blackNextSteps = findNextStep(BLACKDOT, newBoard, {left, right, up, bottom})

                    if (blackNextSteps.length >= 2) {
                        result = BLACK
                        break;
                    }
                }
            }
        }
        return result;
    }



    /**
     * @param {*} target 落子者的颜色
     */
    function findNextStep(target, board, {left, right, up, bottom}) {
        const result = [];
        result.push = function([x, y]){
            const key = getPositionKey(x, y)
            if(!result.includes(key)){
                Array.prototype.push.call(result, key)
            }
        }
        let rows = [], cols = [], leftUp = [], rightUp = [];
        const opposition = target === 1 ? 0 : 1; // 另一方棋子的颜色

        // 空缺数量不能大于1（白棋）
        // 空缺数量不能大于2（黑棋）
        const MAX_EMPTY_COUNT = 1;
        for (let i = up; i < bottom; i++) {
            for (let j = left; j < right; j++) {
                if (board[i][j] !== target) {
                    continue;
                } else {
                    const positionKey = `p_${i}_${j}`
                    
                    // 行方向 没有被遍历过
                    if (!rows.includes(positionKey)) {
                        let y = j + 1, emptyPostions = [], targetCount = 1;
                        while (y < N && board[i][y] !== opposition && targetCount < SUCCESS_COUNT && (y - j) < SUCCESS_COUNT) {
                            if (board[i][y] === target) {
                                targetCount++;
                                if (targetCount === (SUCCESS_COUNT - 1)) {
                                    break;
                                }
                            }
                            if (board[i][y] === undefined) {
                                emptyPostions.push([i, y])
                            }
                            if (emptyPostions.length > MAX_EMPTY_COUNT) break;
                            y++;
                        }
                        if (targetCount === (SUCCESS_COUNT - 1)) {
                            if (emptyPostions.length === 1) {
                                result.push(emptyPostions[0])
                            } else {
                                if (board[i][y + 1] === undefined) {
                                    result.push([i, y + 1])
                                }
                                if (board[i][j - 1] === undefined) {
                                    result.push([i, j - 1])
                                }
                            }
                        }
                    }

                    // 列方向
                    if (!cols.includes(positionKey)) {
                        let x = i + 1, emptyPostions = [], targetCount = 1;
                        while (x < M && board[x][j] !== opposition && targetCount < SUCCESS_COUNT && (x - i) < SUCCESS_COUNT) {
                            if (board[x][j] === target) {
                                targetCount++;
                                if (targetCount === (SUCCESS_COUNT - 1)) {
                                    break;
                                }
                            }
                            if (board[x][j] === undefined) {
                                emptyPostions.push([x, j])
                            }
                            if (emptyPostions.length > MAX_EMPTY_COUNT) break;
                            x++;
                        }
                        
                        if (targetCount === (SUCCESS_COUNT - 1)) {
                            if (emptyPostions.length === 1) {
                                result.push(emptyPostions[0]);
                            } else {
                                if (board[x + 1][j] === undefined) {
                                    result.push([x + 1, i])
                                }
                                if (board[i - 1][j] === undefined) {
                                    result.push([i - 1, j])
                                }
                            }
                        }
                    }
                    // 左对角线方向
                    if (!leftUp.includes(positionKey)) {
                        // leftUp.push(positionKey)
                        const tmpPositions = [];
                        let x = i + 1, y = j + 1, emptyPostions = [], targetCount = 1;
                        while (x < M && y < N && board[x][y] !== opposition && targetCount < SUCCESS_COUNT && (x - i) < SUCCESS_COUNT) {
                            if (board[x][y] === target) {
                                // tmpPositions.push(getPositionKey(x, y))
                                targetCount++;
                                if (targetCount === (SUCCESS_COUNT - 1)) {
                                    break;
                                }
                            }
                            if (board[x][y] === undefined) {
                                emptyPostions.push([x, y])
                            }
                            if (emptyPostions.length > MAX_EMPTY_COUNT) break;
                            x++; y++
                        }
                        if (targetCount === (SUCCESS_COUNT - 1)) {
                        
                        if (emptyPostions.length === 1) {
                                result.push(emptyPostions[0])
                            } else {
                                if (board[x + 1][y + 1] === undefined) {
                                    result.push([x + 1, y + 1])
                                }
                                if (board[i - 1][j - 1] === undefined) {
                                    result.push([i - 1, j - 1])
                                }
                            }
                        }


                    }
                    // 右对角线方向
                    if (!rightUp.includes(positionKey)) {
                        const tmpPositions = [];
                        let x = i + 1, y = j - 1, emptyPostions = [], targetCount = 1;
                        while (x < M && y >= 0 && board[x][y] !== opposition && targetCount < SUCCESS_COUNT && (x - i) < SUCCESS_COUNT) {
                            if (board[x][y] === target) {
                                targetCount++;
                                if (targetCount === (SUCCESS_COUNT - 1)) {
                                    break;
                                }
                            }
                            if (board[x][y] === undefined) {
                                emptyPostions.push([x, y])
                            }
                            if (emptyPostions.length > MAX_EMPTY_COUNT) break;
                            x++; y--;
                        }
                        if (targetCount === (SUCCESS_COUNT - 1)) {
                        
                        if (emptyPostions.length === 1) {
                                result.push(emptyPostions[0])
                            } else {
                                if (board[x + 1][y - 1] === undefined) {
                                    result.push([x + 1, y - 1])
                                }
                                if (board[i - 1][j + 1] === undefined) {
                                    result.push([i - 1, j + 1])
                                }
                            }
                        }
                    }
                }
            }
        }
        return result;
    }

    /**
     * 根据已有pieces，初始化当前棋盘
     * @param {*} param0 
     */
    function initBoard([x, y, color]) {
        board[x + xVal][y + yVal] = color
        color === 0 ? blackCount++ : whiteCount++
    }


    function preHandle(pieces) {
        let minX = Number.MAX_SAFE_INTEGER,
            minY = Number.MAX_SAFE_INTEGER, maxX = Number.MIN_SAFE_INTEGER, maxY = Number.MIN_SAFE_INTEGER;
        pieces.forEach(([x, y]) => {
            minX = Math.min(x, minX)
            minY = Math.min(y, minY)
            maxX = Math.max(x, maxX)
            maxY = Math.max(y, maxY)
        })
        const xCount = maxX - minX;
        const yCount = maxY - minY;

        xVal = -minX + threshold;
        yVal = -minY + threshold

        // 上下左右均留出threshold数量的空间 
        return new Array(xCount + threshold * 2 + 1).fill(0).map(() => new Array(yCount + threshold * 2 + 1))
    }

    function getPositionKey(x, y) {
        return `p_${x}_${y}`
    }

    function copyBoard() {
        const newBoard = [];
        board.forEach(rows => {
            newBoard.push([...rows])
        })
        return newBoard
    }
};

// case 8
console.log(gobang([[0,0,1],[0,1,0],[0,3,0],[0,4,0],[0,7,0],[0,8,1]]))
// case 5
// console.log(gobang([[9,3,1],[4,5,0],[9,4,0],[7,9,1],[4,4,1],[1,5,1],[5,4,0],[0,4,0],[1,0,0],[6,1,1],[6,2,1],[8,4,0],[5,3,0],[7,5,1],[7,3,0],[0,7,1],[6,7,1],[9,8,0],[9,7,1],[0,3,0],[6,6,0],[2,5,1],[1,2,1],[6,8,0],[4,6,0],[3,3,0],[1,3,0],[0,2,1],[9,6,0],[1,4,0],[2,1,0],[3,4,0],[4,8,1],[6,9,1],[9,0,1],[4,0,0],[2,6,1],[8,9,0]]))
// case 7 
// console.log(gobang([[7,3,1],[5,1,0],[9,7,1],[3,1,0],[7,4,1],[2,7,1],[3,5,1],[0,8,1],[4,3,1],[7,9,0],[9,8,0],[1,1,0],[8,7,0],[6,1,0],[6,2,1],[9,9,0],[1,2,1],[8,4,0],[8,3,1]]))
// white
// console.log(gobang([[3,4,0],[5,3,1],[5,8,0],[5,5,0],[1,8,0],[7,8,0],[5,7,0],[9,3,1],[8,3,1],[3,0,1],[9,9,1],[9,0,1],[7,1,0],[4,3,1],[6,6,1],[3,2,1],[3,3,0],[3,6,1],[0,9,0],[7,5,1],[0,0,0],[3,5,1],[3,8,1],[8,1,1],[2,4,0],[0,7,1],[1,7,1],[5,6,1],[2,9,0],[8,0,0],[8,5,0],[1,4,0],[0,1,1],[9,6,1],[1,0,0],[5,2,1],[2,1,1],[5,4,1],[3,9,0],[1,5,0],[8,6,0],[5,1,1],[7,2,1],[9,2,0],[2,3,1],[9,7,0],[2,2,1],[6,5,0],[0,8,0],[7,0,1],[7,7,1],[8,4,0],[3,1,0]]))
// Black
// console.log(gobang([[7,2,0],[5,4,1],[9,1,1],[3,3,0],[7,5,1],[1,7,1],[8,1,0],[3,0,1],[0,9,0],[7,9,1],[8,8,0],[8,5,0],[9,0,0],[9,3,1],[1,0,0],[6,2,1],[4,4,0],[8,2,0],[2,9,1],[0,5,0],[5,5,0],[5,6,0],[6,9,0],[7,8,0],[4,7,0],[3,7,0],[4,9,1],[6,0,0],[1,4,1],[1,9,0],[6,8,1],[0,0,1],[1,8,1],[2,6,1],[1,6,1],[2,7,1],[7,0,0],[0,8,1],[4,1,0],[2,1,1],[6,1,1],[1,2,1],[5,8,0],[3,5,1],[8,0,0],[5,3,0],[6,6,1],[0,7,1],[5,2,1],[3,6,1],[2,8,0],[9,4,0]]))
// Black
// console.log(gobang([[-1000000000, -1000000000, 0], [-999999999, -1000000000, 0], [-999999998, -1000000000, 0]]))

// Black
// console.log(gobang([[0,3,1],[1,2,1],[1,3,1],[2,0,0],[2,1,0],[2,4,0],[3,3,1],[3,4,0],[4,3,1],[4,5,0],[5,6,0]]))
// None
// console.log(gobang([[0, 0, 1], [1, 1, 1], [2, 2, 0]])) // None
// White
// console.log(gobang([[1, 2, 1], [1, 4, 1], [1, 5, 1], [1, 3, 1], [2, 1, 0], [2, 3, 0], [2, 4, 0], [3, 2, 1], [3, 4, 0], [4, 2, 1], [5, 2, 1]]))
// None
// console.log(gobang([[1, 2, 1], [1, 4, 1], [1, 5, 1], [1, 6, 1], [2, 1, 0], [2, 3, 0], [2, 4, 0], [3, 2, 1], [3, 4, 0], [4, 2, 1], [5, 2, 1]]))
// None
// console.log(gobang([[1, 2, 1], [1, 4, 1], [1, 5, 1], [1, 6, 1], [2, 2, 0], [2, 5, 1], [2, 1, 0], [2, 3, 0], [2, 4, 0], [3, 2, 1], [3, 4, 0], [4, 2, 1], [5, 2, 1]]))
// Black
// console.log(gobang([[1, 2, 1], [1, 4, 1], [1, 5, 1], [2, 1, 0], [2, 3, 0], [2, 4, 0], [3, 2, 1], [3, 4, 0], [4, 2, 1], [5, 2, 1]]))

function drawBoard(table) {
    if (globalBoard) {
        const m = globalBoard.length, n = globalBoard[0].length;
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        tr.appendChild(td)
        let i = 0;
        while (i < n) {
            const td = document.createElement('td')
            td.textContent = i++
            tr.appendChild(td)
        }
        table.appendChild(tr)
        for (let i = 0; i < m; i++) {
            const tr = document.createElement('tr')
            const td = document.createElement('td')
            td.textContent = i
            tr.appendChild(td)
            for (let j = 0; j < n; j++) {
                const td = document.createElement('td')
                td.className = globalBoard[i][j] === 0 ? 'black' : globalBoard[i][j] === 1 ? 'white' : ''
                td.textContent = globalBoard[i][j]
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }
    }
}