/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

 * 示例 1：
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]

 * 示例 2：
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 

 * 提示：
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/spiral-matrix
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    const n = matrix.length;
    if( n===0 ) return [];
    let i = 0, j = 0;
    let right = matrix[0].length, bottom = n, left = -1, top = 0;
    const result = [];
    while(true){
        if(j >= right ) break;
        while(j<right){
            result.push(matrix[i][j++]);
        }
        j--;i++;right--;
        if(i>=bottom) break;
        while(i<bottom){
            result.push(matrix[i++][j]);
        }
        i--;j--;bottom--;
        if(j<=left) break;
        while(j>left){
            result.push(matrix[i][j--]);
        }
        i--;j++;left++;
        if(i<=top) break;
        while(i>top){
            result.push(matrix[i--][j])
        }
        i++;j++;top++;

    }
    return result;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
console.log(spiralOrder([[1,2,3,4]]));
console.log(spiralOrder([[1],[2],[3],[4],[5],[6]]));
console.log(spiralOrder([[1,2],[3,4],[5,6]]));