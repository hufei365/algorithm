/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var store = [...Array(m)].map(() => [...Array(n)]);
    function walk(i, j) {
        if( store[i-1][j-1]) return store[i-1][j-1];
        var count = 0;
        if (i === 1 && j === 1) {
            count++;
        }
        if (i > 1) {
            count += walk(i - 1, j)
        }
        if (j > 1) {
            count += walk(i, j - 1);
        }
        store[i-1][j-1] = count;
        return count;
    }
    return walk(m, n);
    return count;
};