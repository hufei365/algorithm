/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。

 * 示例 1:

 * 输入: 2.00000, 10
 * 输出: 1024.00000
 * 示例 2:

 * 输入: 2.10000, 3
 * 输出: 9.26100
 * 示例 3:

 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2-2 = 1/22 = 1/4 = 0.25
 * 
 * 说明:
 *  1. -100.0 < x < 100.0
 *  2. n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/powx-n
 */

 /**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let flag = false, r = 1;
    if( n < 0 ){
        flag = true;
        n = Math.abs(n);
    }
    if( n === 1 ) {
        r = x;
    } else if( n > 1 ){
        let i = 0,  t;
        r = x;
        while( (t = Math.pow(2,++i)) <= n ){
            r = r*r;
        }
        if( t > n ){
            r = r * myPow( x, n - Math.pow(2, i-1))
        }
    }
    return flag ? 1/r : r;
};

console.log(myPow(2,10))
console.log(myPow(3,-3))
