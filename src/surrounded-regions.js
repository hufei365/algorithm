/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const VISITED = 999
    const m = board.length, n = board[0].length;
    const dp = new Array(m).fill(1).map(() => new Array(n));
    function setDP(i, j, result = true) {
        if (dp[i][j] === true) return
        dp[i][j] = result
        if (result) {
            if (i > 0 && board[i - 1][j] === 'O') {
                setDP(i - 1, j, true)
            }
            if (i < m - 1 && board[i + 1][j] === 'O') {
                setDP(i + 1, j, true)
            }
            if (j > 0 && board[i][j - 1] === 'O') {
                setDP(i, j - 1, true)
            }
            if (j < n - 1 && board[i][j + 1] === 'O') {
                setDP(i, j + 1, true)
            }
        }
    }

    const result = []

    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            const curNode = board[i][j];
            if (curNode === 'O' && !isLinkToEdge(i, j)) {
                result.push([i, j])
            }
        }
    }

    result.forEach(([i, j]) => {
        board[i][j] = 'X'
    })

    /**
     * 
     * @param {*} i 
     * @param {*} j 
     * @param {*} direction 左上或右下
     * @returns 
     */
    function isLinkToEdge(i, j) {
        if (board[i][j] === 'X') return false
        if (dp[i][j] !== undefined) return dp[i][j]

        if (i === 0 || j === 0) return board[i][j] === 'O'
        if (i === (m - 1) || j === (n - 1)) return board[i][j] === 'O'

        dp[i][j] = VISITED // 设置访问过多标志
        if (i > 0 && i < (m - 1) && j > 0 && j < (n - 1)) {
            let result = false
            if (dp[i - 1][j] !== VISITED) {
                result = isLinkToEdge(i - 1, j)
            }
            if (result) {
                setDP(i, j, result)
                return result
            }
            if (dp[i + 1][j] !== VISITED) {
                result = isLinkToEdge(i + 1, j)
            }
            if (result) {
                setDP(i, j, result)

                return result
            }
            if (dp[i][j - 1] !== VISITED) {
                result = isLinkToEdge(i, j - 1)
            }
            if (result) {
                setDP(i, j, result)

                return result
            }
            if (dp[i][j + 1] !== VISITED) {
                result = isLinkToEdge(i, j + 1)
            }
            setDP(i, j, result)
            return result
        }
        return dp[i][j]
    }
};

const board = [["X", "X", "X", "X", "O", "O", "X", "X", "O"], ["O", "O", "O", "O", "X", "X", "O", "O", "X"], ["X", "O", "X", "O", "O", "X", "X", "O", "X"], ["O", "O", "X", "X", "X", "O", "O", "O", "O"], ["X", "O", "O", "X", "X", "X", "X", "X", "O"], ["O", "O", "X", "O", "X", "O", "X", "O", "X"], ["O", "O", "O", "X", "X", "O", "X", "O", "X"], ["O", "O", "O", "X", "O", "O", "O", "X", "O"], ["O", "X", "O", "O", "O", "X", "O", "X", "O"]]
console.log(board)
solve(board)
console.log(board)