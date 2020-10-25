/**
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

 * 示例 1:

 * 输入:
 * [
 * [ 1, 2, 3 ],
 * [ 4, 5, 6 ],
 * [ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 示例 2:

 * 输入:
 * [
 *   [1, 2, 3, 4],
 *   [5, 6, 7, 8],
 *   [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/spiral-matrix
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if( matrix.length === 0 ) return [];
    let m = matrix.length, n = matrix[0].length;
    let results = [];
    let i = 0, j = 0;
    let left = 0, right = n, bottom = m, up = 0;
    while( left < (n/2) && up < (m/2)  ){
        if( left > n/2) left--;
        if( up > m/2) up--;
        i = up; j=left;

        while( j < right ){
            results.push( matrix[i][j]);j++;
        }
        right--;
        j = right;
        i++;

        while( i < bottom ){
            results.push( matrix[i][j]);i++;
        }
        bottom--;
        i = bottom;
        j--;
        if( up === bottom ) break;
        while( j >= left ){
            results.push( matrix[i][j]);j--;
        }
        j = left;
        left++;
        i--;
        while( i > up && j < right ){
            results.push( matrix[i][j]);i--;
        }
        up++;
    }
    return results;
};

console.log( spiralOrder([[2,3,4],[5,6,7],[8,9,10],[11,12,13]]))
console.log( spiralOrder([[7],[9],[6]]    ))
console.log(spiralOrder ([[2,5],[8,4],[0,-1], [9, 7]] ))

;console.log( spiralOrder([
    [3],
    [2]
  ]));


console.log(spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]))

;console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]))