/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

 * 示例 1:
 * 
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 示例 2:
 * 
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 * 说明：
 * 
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/multiply-strings
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if( num1 == 0 || num2 == 0 ) return "0";
    let l1 = num1.length, l2 = num2.length;

    let a1 = num1.split(''), a2 = num2.split('');
    
    let result = [];
    for( let i = 0 ; i < a2.length; i++){
        let multi = a2[i];
        if( multi == 0 ) continue;

        let r = [];
        while( multi ){
            r = addArray( r, a1 );
            multi--;
        }
        result.push( r.concat( (new Array(a2.length -i -1)).fill('0')))
    }
    console.log( result )
    
    return  ( result.reduce( (prev, cur)=>{
        return addArray( prev, cur )
    }) ).join(''); 
};


function addArray( s1, s2){
    let l1 = s1.length, l2 = s2.length;
    let max = Math.max(l1, l2);
    let r = (new Array(max)).fill(0), j = 1;
    while( j <= max ){
        let n1 = l1-j > -1 ? s1[l1-j] : 0,
            n2 = l2-j > -1 ? s2[l2-j] : 0;
        
        let newNum = (+n1) + ~~n2 + ~~r[max-j];
        if( newNum > 9 ){
            r[max-j] = String(newNum%10);
            if( max === j ){
                r.unshift("1")
            } else {
                r[max-j-1] = 1;
            }
        } else {
            r[max-j] = String(newNum);
        }
        j++;
    }
    if(r[0] === 0) return r.slice(1,max);
    return r;
}
console.log( addArray(''.split(''), ''.split('')))

console.log(multiply('123', '21'))