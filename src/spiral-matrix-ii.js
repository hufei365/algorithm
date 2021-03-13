/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

 * 示例 1：
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]

 * 示例 2：
 * 输入：n = 1
 * 输出：[[1]]
 

 * 提示：
 * 1 <= n <= 20

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/spiral-matrix-ii
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function (n) {
    let i = 0, j = 0;
    const arr = (new Array(n)).fill(0).map(v=>{
        return (new Array(n)).fill(0);
    });
    let num = 1;
    let left = 0, right = n, bottom = n, top = 0;
    while (num <= n * n) {
        while(j<right){
            arr[i][j++] = num++;
        }
        j--; i++;right--;
        while(i<bottom){
            arr[i++][j] = num++;
        }
        i--;j--;bottom--;
        while(j>=left){
            arr[i][j--] = num++;
        }
        j++;i--;left++;
        while(i>top){
            arr[i--][j] = num++;
        }
        i++;j++;top++;
    }

    return arr;
};

generateMatrix(2);
generateMatrix(3);
generateMatrix(4);
generateMatrix(5);
generateMatrix(6);