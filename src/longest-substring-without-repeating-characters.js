/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0,j = 1;
    let target = s[0]||'';
    let max = target.length;
    while( s.length - i > max && j < s.length ){
        let pos = target.indexOf(s[j]);
        if( pos === -1 ){
            target += s[j++];
        } else {
            max = Math.max( target.length, max );
            i += (pos+1);
            target = s.slice(i, ++j)
        }
    }
    max = Math.max( target.length, max );
    return max;
};

console.log( lengthOfLongestSubstring('aaa'))
console.log( lengthOfLongestSubstring('achjklc'))
console.log( lengthOfLongestSubstring("aab"))
console.log( lengthOfLongestSubstring(''))
console.log( lengthOfLongestSubstring('a'))