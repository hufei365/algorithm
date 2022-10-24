/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const len = s.length
    const dp = new Array(len).fill(0).map(() => new Array(len).fill(undefined))

    function doPartition(startPos) {
        if (startPos >= len) return []
        if (startPos === len - 1) return [[s[startPos]]]
        let results = []

        for (let j = startPos; j < len; j++) {
            if (isPalindrome(startPos, j)) {
                const subResult = doPartition(j + 1)
                if (subResult.length) {
                    subResult.forEach(sub => {
                        sub.unshift(s.slice(startPos, j + 1))
                    })
                    results = results.concat(subResult)
                }
            }
        }
        if (isPalindrome(startPos, len - 1)) {
            results.push([s.slice(startPos, len)])
        }
        return results
    }

    function isPalindrome(i, j) {
        if (i === j) return true
        if (dp[i][j] !== undefined) return dp[i][j]
        const result = s[i] === s[j] && ((i + 1 === j) || i + 1 === j - 1 || (i < j && isPalindrome(i + 1, j - 1)))
        dp[i][j] = result;
        return result
    }

    return doPartition(0)
};
partition('aabb')
partition('aaa')
