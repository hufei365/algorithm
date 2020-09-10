/**
 * https://leetcode-cn.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var memo = Object.create(null);

    return _count(n);

    function _count(n){
        if( n === 1 ) return '1'
        if( memo[n] ) return memo[n];

        let last = _count(n-1), stack = [], top = null, result = '';
        for( let i = 0; i < last.length ; i++){
            if( top === null) {
                stack.push( top = last[i]);
            } else if( last[i] === top ){
                stack.push( last[i] )
            } else {
                result+=`${stack.length}${top}`;
                stack.length=0;
                stack.push(last[i]);
                top=last[i];
            }
        }
        if( stack.length > 0 ) result+=`${stack.length}${top}`;
        memo[n] = result;
        return result;
    }
};

console.log( countAndSay(1) );
console.log( countAndSay(2) );
console.log( countAndSay(3) );
console.log( countAndSay(4) );
console.log( countAndSay(5) );