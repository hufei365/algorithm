/**
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。

 * 示例 1：
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * 输出：true
 
 * 示例 2：
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * 输出：false
 
 * 提示：
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 100
 * -104 <= matrix[i][j], target <= 104

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/search-a-2d-matrix
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    if(m === 1 && n === 1) return matrix[0][0] === target;
    let result = false;

    let left = 0, right = m-1, mid = parseInt((right+left)/2);
    result = matrix[mid][0] === target || matrix[left][0] === target || matrix[right][0] === target
                || matrix[mid][n-1] === target
                || matrix[right][n-1] === target
                || matrix[left][n-1] === target;
    if(result) return result;
    let isBigger = true;
    while(mid > left){
        if(matrix[mid][0] > target ){
            right = mid;
            mid = parseInt((right+left)/2);
            isBigger = true;
        } else if(matrix[mid][0] < target) {
            left = mid;
            mid = parseInt((right+left)/2);
            isBigger = false;
        } else {
            result = true;
            break;
        }
    }
    if(result) return result;

    const row = matrix[mid][n-1] >= target ?  matrix[mid] : matrix[mid+1];
    if(row === undefined) return false;

    left = 0; right = n-1;
    mid = parseInt((left+right)/2);
    result = row[mid] === target || row[left] === target || row[right] === target;
    if(result) return result;

    while(mid>left){
        if(row[mid] > target ){
            right = mid;
            mid = parseInt((right+left)/2);
            isBigger = true;
        } else if(row[mid] < target) {
            left = mid;
            mid = parseInt((right+left)/2);
            isBigger = false;
        } else {
            result = true;
            break;
        }
    }

    return result;
};

console.log( searchMatrix([[1,1]], 2)); // false
console.log( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 30)); // true
console.log( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 11)); // true
console.log( searchMatrix([[1,3]], 3)); // true
console.log( searchMatrix([[1,3], [4,5]], 5)); // true
console.log( searchMatrix([[1],[3]], 3)); // true
console.log( searchMatrix([[1,1]], 1)); // true
console.log( searchMatrix([[1],[1]], 1)); // true
console.log( searchMatrix([[1]], 1)); // true
console.log( searchMatrix([[1]], 2)); // false
console.log( searchMatrix([[1,3,4,8,9]], 4)); // true
console.log( searchMatrix([[1,3,4,8,9]], 5)); // false
console.log( searchMatrix([[1],[3],[4],[8],[9]], 4)); // true
console.log( searchMatrix([[1],[3],[4],[8],[9]], 5)); // false
console.log( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)); // true
console.log( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false