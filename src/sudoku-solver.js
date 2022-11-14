/**
 * https://leetcode.cn/problems/sudoku-solver/description/
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const matrixs = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => []))
    const rows = new Array(9).fill(0).map(() => []);
    const cols = new Array(9).fill(0).map(() => []);

    const newBoard = resolve(board, matrixs, rows, cols);
    for(let i = 0 ; i<9; i++){
        for(let j = 0; j<9; j++){
            board[i][j] = newBoard[i][j]
        }
    }

    function resolve(board, matrixs, rows, cols){
        const emptys = new Map();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (!isEmpty(i, j)) {
                    setMatrix(i, j)
                    rows[i].push(board[i][j])
                    cols[j].push(board[i][j])
                } else {
                    emptys.set([i, j], [])
                }
            }
        }
        let result = true;
        while(emptys.size){
            const entries = emptys.entries()
            let setNewValue = false;
            for(let [pos] of entries){
                const avaiable = fillNumber(pos, matrixs, rows, cols)
                if(avaiable === false){
                    result = false;
                    break;
                } else if(avaiable === true) {
                    setNewValue = true;
                }
            }
            if(result === false) break;
            if(setNewValue === false) break;
        }
        
        if(result === false){
            return false;
        }

        if(emptys.size === 0){
            return board;
        } else {
            //需要回溯的地方
            const entries = emptys.entries()
            const tryCell = entries.next().value
            let newResult = false;
            tryCell[1].some(value=>{
                const [x, y] = tryCell[0];
                const newBoard = deepCopy(board)
                const newMatrixs = deepCopy(matrixs)
                const newRows = deepCopy(rows)
                const newCols = deepCopy(cols)
                newBoard[x][y] = value;

                const boardNums = getSameMatrixNums(x, y, newMatrixs)
                const rowsNums = getSameRowNums(x, y, newRows)
                const colsNums = getSameColNums(x, y, newCols)
                boardNums.push(value);
                rowsNums.push(value);
                colsNums.push(value);
                newResult = resolve(newBoard, newMatrixs, newRows, newCols)
                return newResult
            })
            return newResult
        }


        function fillNumber(pos, matrixs, rows, cols) {
            const [i, j] = pos;
            const boardNums = getSameMatrixNums(i, j, matrixs)
            const rowsNums = getSameRowNums(i, j, rows)
            const colsNums = getSameColNums(i, j, cols)
    
            const exists = new Set([...boardNums, ...rowsNums, ...colsNums]);
            if( exists.size === 9) {
                return false
            } else if (exists.size === 8) {
                for (let n = 1; n < 10; n++) {
                    const sn = String(n)
                    if (!exists.has(sn)) {
                        board[i][j] = sn;
                        boardNums.push(sn);
                        rowsNums.push(sn);
                        colsNums.push(sn);
                        emptys.delete(pos)
                        break;
                    }
                }
                return true;
            } else if(exists.size < 8) {
                const avaiables = [];
                for (let n = 1; n < 10; n++) {
                    const sn = String(n)
                    if (!exists.has(sn)) {
                        avaiables.push(sn)
                    }
                }
                emptys.set(pos, avaiables)
            } else {
                console.log('It should not be printed!!!')
            }
        }
    
        function setMatrix(i, j) {
            const [x, y] = getMatrixPos(i, j)
            if (board[i][j] !== '.') {
                matrixs[x][y].push(board[i][j])
            }
        }
        function isEmpty(i, j) {
            return board[i][j] === '.'
        }
        function getSameMatrixNums(i, j, matrixs) {
            const [x, y] = getMatrixPos(i, j)
            return matrixs[x][y]
        }
        function getSameRowNums(i, j, rows) {
            return rows[i]
        }
        function getSameColNums(i, j, cols) {
            return cols[j]
        }
    
        function getSameMatrixColOrRow(j){
            const rest = j % 3;
            let result = [];
            switch(rest){
                case 0: 
                    result = [j+1, j+2];break;
                case 1:
                    result = [j-1, j+1];break;
                case 2:
                    result = [j -2, j - 1]; break;
            }
            return result;
        }
    
        function getMatrixPos(i, j) {
            const x = Math.floor(i / 3);
            const y = Math.floor(j / 3);
            return [x, y]
        }
    }

    

    function deepCopy(source){
        if(source === null) return source;
        if(typeof source !== 'object') return source;

        const isArray = Array.isArray(source)
        const target = isArray ? new Array(source.length) : {};
        if(isArray){
            source.forEach((value, index)=>{
                target[index] = deepCopy(value)
            })
        } else {
            Object.entries(source).forEach(([key, value])=>{
                target[key] = deepCopy(value)
            })
        }
        return target;
    }
};

// const board = [[".", ".", "9", "7", "4", "8", ".", ".", "."], ["7", ".", ".", ".", ".", ".", ".", ".", "."], [".", "2", ".", "1", ".", "9", ".", ".", "."], [".", ".", "7", ".", ".", ".", "2", "4", "."], [".", "6", "4", ".", "1", ".", "5", "9", "."], [".", "9", "8", ".", ".", ".", "3", ".", "."], [".", ".", ".", "8", ".", "3", ".", "2", "."], [".", ".", ".", ".", ".", ".", ".", ".", "6"], [".", ".", ".", "2", "7", "5", "9", ".", "."]];
const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
solveSudoku(board)