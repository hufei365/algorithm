/**
 * https://leetcode.cn/problems/replace-words/
 */

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const words = sentence.split(' ')
    let answer = []
    words.forEach(word=>{
        let n = word.length
        let prefix = '', i = 0;
        for(; i < n; i++){
            prefix += word[i] 
            if(dictionary.includes(prefix)){
                answer.push(prefix)
                break;
            }
        }
        if(i === n){
            answer.push(word)
        }
    })
    return answer.join(' ')
};