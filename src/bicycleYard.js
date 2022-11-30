/**
 * https://leetcode.cn/problems/kplEvH/?envType=study-plan&id=lccup-2021-fall&plan=lccup&plan_progress=4tnynkm
 */

/**
 * 注意： 骑行过程中速度不能为零或负值
 * @param {number[]} position
 * @param {number[][]} terrain
 * @param {number[][]} obstacle
 * @return {number[][]}
 */

var bicycleYard = function (position, terrain, obstacle) {
    const N = 102;
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const n = terrain.length;
    const m = terrain[0].length;
    const VV = new Array(n).fill(0).map(() => new Array(m).fill(0).map(() => new Array(N).fill(false)))

    const q = [];
    q.push([position[0], position[1], 1]);

    while (q.length) {
        let [x, y, v] = q.shift();

        for (let i = 0; i < 4; i++) {
            const tx = x + dx[i], ty = y + dy[i];
            if (tx < 0 || tx >= n || ty < 0 || ty >= m) continue;

            const tv = v + terrain[x][y] - terrain[tx][ty] - obstacle[tx][ty];
            if (tv <= 0 || VV[tx][ty][tv]) continue;

            VV[tx][ty][tv] = true;
            q.push([tx, ty, tv]);
        }
    }

    const ans = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (VV[i][j][1] && (i != position[0] || j != position[1])) {
                ans.push([i, j]);
            }
        }
    }

    return ans;
}



// 期望结果： [[0,3],[0,6],[0,8],[2,8],[3,8],[4,6]]
console.log(bicycleYard([0, 1],
    [
        [63, 91, 53, 6, 70, 29, 1, 86, 31],
        [0, 42, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 74, 77, 94, 8],
        [55, 57, 59, 0, 0, 0, 11, 33, 23],
        [58, 27, 51, 0, 0, 56, 10, 24, 7],
        [82, 49, 74, 0, 0, 79, 96, 68, 25],
        [72, 51, 67, 0, 58, 59, 81, 52, 64],
        [95, 30, 35, 0, 45, 79, 71, 15, 74]
    ],
    [
        [21, 7, 31, 16, 33, 39, 25, 12, 4],
        [0, 42, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 19, 14, 43, 30],
        [50, 8, 37, 0, 0, 0, 44, 33, 17],
        [5, 12, 29, 0, 0, 30, 2, 33, 40],
        [40, 18, 14, 0, 0, 24, 15, 6, 19],
        [10, 3, 40, 0, 39, 38, 16, 44, 48],
        [48, 27, 26, 0, 42, 13, 9, 25, 31]
    ]
))