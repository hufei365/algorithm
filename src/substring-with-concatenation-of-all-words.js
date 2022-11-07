/**
 * https://leetcode.cn/problems/substring-with-concatenation-of-all-words/
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let i = 0;
    const slen = s.length;
    const wlen = words.length, wordLen = words[0].length;
    const result = [];
    while(i <= slen-wlen*wordLen){
        const m = [...words];
        let flag = true; // 满足条件
        let j = i, word = null;
        while(word = s.slice(j, j+wordLen)){
            if(m.includes(word)){
                const pos = m.indexOf(word);
                m.splice(pos, 1);
                j+=wordLen;
                if( (j - i) === wlen*wordLen){
                    break;
                }
            } else {
                flag = false;
                break;
            }
        }
        if(flag){
            result.push(i)
        }
        i++;
    }
    return result;
};

console.log(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","good"]))