
/**
 * 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。
 * 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。
 * （例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）
 * 题目数据保证答案符合 32 位带符号整数范围。

 * 示例 1：
 * 输入：s = "rabbbit", t = "rabbit"
 * 输出：3
 * 解释：
 * 如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
 * (上箭头符号 ^ 表示选取的字母)
 * rabbbit
 * ^^^^ ^^
 * rabbbit
 * ^^ ^^^^
 * rabbbit
 * ^^^ ^^^

 * 示例 2：
 * 输入：s = "babgbag", t = "bag"
 * 输出：5
 * 解释：
 * 如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
 * (上箭头符号 ^ 表示选取的字母)
 * babgbag
 * ^^ ^
 * babgbag
 * ^^    ^
 * babgbag
 * ^    ^^
 * babgbag
 *   ^  ^^
 * babgbag
 *     ^^^
 
 * 提示：
 * 0 <= s.length, t.length <= 1000
 * s 和 t 由英文字母组成

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/distinct-subsequences
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    const m = s.length, n = t.length;
    if(m < n || (m > 0 && n === 0) ) return 0;
    const dp = new Array(m);
    for (let i = 0; i < m; i++) dp[i] = (new Array(n)).fill(-1);


    function walk(i, j) {
        if (dp[i][j] !== -1) return dp[i][j];
        if ((m - i) === (n - j)) {
            if (s.slice(i) === t.slice(j)) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = 0;
            }
            return dp[i][j];
        }
        let count = 0;
        for (let x = i; x <= (m - (n - j) ); x++) {
            if (s[x] === t[j]) {
                count += ((j < n-1 ) ? walk(x + 1, j + 1) : 1);
            }
        }
        dp[i][j] = count;
        return dp[i][j];
    }
    return walk(0, 0);
};

console.log(numDistinct("rab", "rab")); // 1
console.log(numDistinct("rabbbit", "rabbit")); // 3
console.log(numDistinct("babgbag", "bag")); // 5