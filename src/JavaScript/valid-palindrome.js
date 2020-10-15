/**
 * https://leetcode-cn.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if( s.length === 0 ) return true;
    var i = 0, j = s.length-1;
    var result = true;
    while( i < j ){
        if( !/[\dA-Z]/i.test(s[i])){
            i++;
        } else if( !/[\dA-Z]/i.test(s[j]) ){
            j--;
        } else if( s[i].toLowerCase() === s[j].toLowerCase()){
            i++;
            j--;
        } else {
            result = false; break;
        }
    }
    return result;
};

console.log( isPalindrome(`A man, a plan, a canal: Panama`))
console.log( isPalindrome(`;;;;abcba;;;;;;`))