/**
 * https://leetcode.cn/problems/number-of-matching-subsequences/
 */


var numMatchingSubseq = function(s, words) {
    // 1. store indexes
    const idxMap = {}
    const chars = s.split("")
    for (const [i, char] of chars.entries()) {
        if (idxMap[char] === undefined) idxMap[char] = []
        idxMap[char].push(i)
    }
    // 2. check each word
    let result = 0
    for (const word of words) {
        const isSubseq = checkSubseq(idxMap, word) 
        if (isSubseq) result ++
    }
    return result
};

function checkSubseq(idxMap, word) {
    const visited = {} // char -> visitCount
    let lastIdx = -1
    for (const char of word) {
        if (idxMap[char] === undefined) {
            return false
        }
        if (visited[char] === undefined) visited[char] = 0
        let curIdx = idxMap[char][visited[char]]
        while (curIdx !== undefined && curIdx < lastIdx) {
            visited[char]++
            curIdx = idxMap[char][visited[char]]
        }
        if (curIdx === undefined) {
            return false
        }

        lastIdx = curIdx
        visited[char]++
    }
    return true
}