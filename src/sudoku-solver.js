/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const matrixs = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => []))
    const rows = new Array(9).fill(0).map(() => []);
    const cols = new Array(9).fill(0).map(() => []);
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
    let count = 1;
    while (emptys.size) {
        const iterator = emptys.entries();
        for (let entry of iterator) {
            fillNumber(entry[0])
        }
        if(emptys.size === 34 ){
            console.log(board); break;
        }
        if(count++ > 20) break;
    }

    function fillNumber(pos) {
        const [i, j] = pos;
        const boardNums = getSameMatrixNums(i, j)
        const rowsNums = getSameRowNums(i, j)
        const colsNums = getSameColNums(i, j)

        const exists = new Set([...boardNums, ...rowsNums, ...colsNums]);
        if (exists.size === 8) {
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
        } else if(exists.size < 8) {
            const avaiables = [];
            for (let n = 1; n < 10; n++) {
                const sn = String(n)
                if (!exists.has(sn)) {
                    avaiables.push(sn)
                }
            }
            const otherRow = getSameMatrixColOrRow(i);
            const otherCol = getSameMatrixColOrRow(j);
            avaiables.some(x=>{})

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
    function getSameMatrixNums(i, j) {
        const [x, y] = getMatrixPos(i, j)
        return matrixs[x][y]
    }
    function getSameRowNums(i, j) {
        return rows[i]
    }
    function getSameColNums(i, j) {
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
};

const board = [[".", ".", "9", "7", "4", "8", ".", ".", "."], ["7", ".", ".", ".", ".", ".", ".", ".", "."], [".", "2", ".", "1", ".", "9", ".", ".", "."], [".", ".", "7", ".", ".", ".", "2", "4", "."], [".", "6", "4", ".", "1", ".", "5", "9", "."], [".", "9", "8", ".", ".", ".", "3", ".", "."], [".", ".", ".", "8", ".", "3", ".", "2", "."], [".", ".", ".", ".", ".", ".", ".", ".", "6"], [".", ".", ".", "2", "7", "5", "9", ".", "."]];

solveSudoku(board)