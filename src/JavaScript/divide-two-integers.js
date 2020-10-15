/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let target = Math.abs( dividend );
    let sum = Math.abs( divisor );

    let isSubZero = (target + sum) > Math.abs( dividend + divisor );

    if( sum > target ) return 0;
    
    let results = new Map();
    results.set( 0, sum );
    
    function _doDivide(target){
        let i = 0; sum = results.get( i );
        if(sum > target ) return 0;
        while( sum < target ){
            sum += sum;
            results.set((++i), sum);
        }
        return sum === target ? Math.pow(2, i) :  Math.pow(2, i-1) + _doDivide( target - results.get( i-1 ))
    }
    let  result = _doDivide( target ), max = Math.pow( 2, 31);
    if( !isSubZero && result >= max ) return max-1;
    if( isSubZero && result > max ) return -max;
    return isSubZero ? -result : result;
};

console.log( divide( 10,3 ))
console.log( divide( -34,3 ))
console.log(divide( 7, -3 ))