/**
 * https://leetcode-cn.com/problems/plus-one/submissions/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var cur = digits.length-1, sum = 0;
    sum = digits[cur] + 1;
    digits[cur] = sum%10;
    while( sum > 9 ){ 
        cur--;
        if( cur < 0 ){
            digits.unshift(1);
            sum = 1;
        } else {
            sum = digits[cur]+1;
            digits[cur] = sum%10;
        }
    }
    return digits;
};