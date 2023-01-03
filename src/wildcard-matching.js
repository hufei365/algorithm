/**
 * https://leetcode.cn/problems/wildcard-matching/
 */


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
    const sLen = s.length, pLen = p.length;
    const dp = new Array(sLen + 1).fill(0).map(() => new Array(pLen + 1).fill(false))
    dp[0][0] = true;
    for (let j = 1; j <= pLen; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1]
        }
    }
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j] || dp[i - 1][j - 1]
            }
        }
    }
    return dp[sLen][pLen];
}