/**
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 示例:
 * 
 * board =
 * [
 *   ['A','B','C','E'],
 *   ['S','F','C','S'],
 *   ['A','D','E','E']
 * ]
 * 
 * 给定 word = "ABCCED", 返回 true
 * 给定 word = "SEE", 返回 true
 * 给定 word = "ABCB", 返回 false
 * 
 * 提示：
 * 
 * board 和 word 中只包含大写和小写英文字母。
 * 1 <= board.length <= 200
 * 1 <= board[i].length <= 200
 * 1 <= word.length <= 10^3
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/word-search
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    let cur = 0;
    const m = board.length, n = board[0].length;
    const used = [];

    for (let x = 0; x < m; x++) {
        used.push(new Array(n).fill(false));
    }

    let result = false;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                cur++;
                used[i][j] = true;
                if (cur >= word.length) {
                    result = true;
                } else {
                    result = findNext(j, i);
                }
                if (result) {
                    break;
                } else {
                    used[i][j] = false;
                    cur--;
                }
            }
        }
        if (result) break;

    }

    return result;

    function findNext(x, y) {
        if (x - 1 > -1 && board[y][x - 1] === word[cur] && used[y][x - 1] !== true) {
            used[y][x - 1] = true; cur++;
            if (cur >= word.length) return true;
            if (!findNext(x - 1, y)) {
                cur--;
                used[y][x - 1] = false;
            } else {
                return true;
            }
        }
        if (x + 1 < n && board[y][x + 1] === word[cur] && used[y][x + 1] !== true) {
            used[y][x + 1] = true; cur++;
            if (cur >= word.length) return true;
            if (!findNext(x + 1, y)) {
                cur--;
                used[y][x + 1] = false;
            } else {
                return true;
            }
        }
        if (y + 1 < m && board[y + 1][x] === word[cur] && used[y + 1][x] !== true) {
            used[y + 1][x] = true; cur++;
            if (cur >= word.length) return true;
            if (!findNext(x, y + 1)) {
                cur--;
                used[y + 1][x] = false;
            } else {
                return true;
            }
        }
        if (y - 1 > -1 && board[y - 1][x] === word[cur] && used[y - 1][x] !== true) {
            used[y - 1][x] = true; cur++;
            if (cur >= word.length) return true;
            if (!findNext(x, y - 1)) {
                cur--;
                used[y - 1][x] = false;

            } else {
                return true;
            }
        }
        return false;
    }
};

const board =
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ];


console.log(exist(
    [
        ["A", "B", "C", "E"], 
        ["S", "F", "E", "S"], 
        ["A", "D", "E", "E"]
    ], "ABCESEEEFS"));

//  console.log(exist([["a","a"]], "aaa"));
//  console.log(exist(board, 'ABCCED'));
//  console.log(exist(board, 'SEE'));
//  console.log(exist(board, 'ABCB'));