/**
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var n = undefined;
    return (n = Math.pow(2, 31)) && Math.min(Math.max(parseInt(str) || 0, -n),  --n)
};
myAtoi(' -42')