/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 * 示例 1：
 * 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * 输出：2
 * 解释：
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右

 * 示例 2：
 * 输入：obstacleGrid = [[0,1],[0,0]]
 * 输出：1
 
 * 提示：
 * m == obstacleGrid.length
 * n == obstacleGrid[i].length
 * 1 <= m, n <= 100
 * obstacleGrid[i][j] 为 0 或 1

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/unique-paths-ii
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if(obstacleGrid[0][0] === 1) return 0;
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m);
    for(let i = 0; i<m; i++){
        dp[i] = new Array(n);
    }
    dp[0][0] = 1;
    for(let top = 1; top < m; top++){
        dp[top][0] = obstacleGrid[top][0] === 1 || dp[top-1][0] === 0 ? 0 : 1;
    }
    for(let left = 1; left < n; left++){
        dp[0][left] = obstacleGrid[0][left] === 1 || dp[0][left-1] === 0 ? 0 : 1;
    }
    for(let top = 1; top < m; top++){
        for(let left = 1; left < n; left++){
            dp[top][left] = obstacleGrid[top][left] === 1 ? 0 : dp[top-1][left] + dp[top][left-1]
        }
    }

    return dp[m-1][n-1];
};

console.log(uniquePathsWithObstacles([[0,0],[1,1],[0,0]])); // 0
console.log(uniquePathsWithObstacles([[0]])); // 1
console.log(uniquePathsWithObstacles([[1]])); // 0
console.log(uniquePathsWithObstacles([[0, 1]])); // 0
console.log(uniquePathsWithObstacles([[1, 0]])); // 0
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]])); // 1
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])); // 2

// 
console.log(uniquePathsWithObstacles([
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
]));

// var uniquePathsWithObstacles = function (obstacleGrid) {
//     const m = obstacleGrid.length;
//     const n = obstacleGrid[0].length;
//     const dp = Array.from(Array(m)).map(v=>(Array.from(Array(n)).map(v=>null)));

//     function doWalk(top, left) {
//         if(dp[top][left] !== null) return dp[top][left];
//         if ((top === (m - 1)) && (left === (n - 1))) {
//             dp[top][left] = obstacleGrid[top][left] === 1 ? 0 : 1;
//             return dp[top][left];
//         }
//         if (obstacleGrid[top][left] === 1) {
//             dp[top][left] === 0;
//             return 0;
//         }
//         let result = 0;

//         if (obstacleGrid[top + 1] && obstacleGrid[top + 1][left] === 0) {
//             result += Number(doWalk(top + 1, left));
//         }
//         if (obstacleGrid[top][left + 1] !== undefined && obstacleGrid[top][left + 1] === 0) {
//             result += Number(doWalk(top, left + 1));
//         }
//         dp[top][left] === result;
//         return result;
//     }

//     return doWalk(0, 0);
// };

// var uniquePathsWithObstacles = (obstacleGrid) => {
//     if (obstacleGrid[0][0] == 1) return 0; // 出发点就被障碍堵住 
//     const m = obstacleGrid.length;
//     const n = obstacleGrid[0].length;
//     // dp数组初始化
//     const dp = new Array(m);
//     for (let i = 0; i < m; i++) dp[i] = new Array(n);
//     // base case
//     dp[0][0] = 1;                 // 终点就是出发点
//     for (let i = 1; i < m; i++) { // 第一列其余的case
//       dp[i][0] = obstacleGrid[i][0] == 1 || dp[i - 1][0] == 0 ? 0 : 1;
//     }
//     for (let i = 1; i < n; i++) { // 第一行其余的case
//       dp[0][i] = obstacleGrid[0][i] == 1 || dp[0][i - 1] == 0 ? 0 : 1;
//     }
//     // 迭代
//     for (let i = 1; i < m; i++) {
//       for (let j = 1; j < n; j++) {
//         dp[i][j] = obstacleGrid[i][j] == 1 ?
//           0 :
//           dp[i - 1][j] + dp[i][j - 1];
//       }
//     }
//     return dp[m - 1][n - 1]; // 到达(m-1,n-1)的路径数
//   };