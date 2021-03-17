/**
 * 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:
输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2:

输入: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
进阶:

一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个常数空间的解决方案吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/set-matrix-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const m = matrix.length;
    if (m === 0) return matrix;

    const n = matrix[0].length;
    let i = 0, j = 0;
    while (i < m) {
        j = 0;
        while (j < n) {
            if (Object.is(matrix[i][j], 0)) {
                for (let x = 0; x < m; x++) {
                    if (!Object.is(matrix[x][j], 0)) {
                        matrix[x][j] = -0;
                    }
                }
                for (let y = 0; y < n; y++) {
                    if (!Object.is(matrix[i][y], 0)) {
                        matrix[i][y] = -0;
                    }
                }
            }
            j++;
        }
        i++;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
};

const arr1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

setZeroes(arr1);
console.log(arr1);

const arr2 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];
setZeroes(arr2);
console.log(arr2);