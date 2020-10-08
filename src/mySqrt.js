/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if( x === 0 ) return 0;
    if( x < 4 ) return 1;
    if( x < 9) return 2;

    let left = 0, right = x;
    while(  right > (left+1)  ){
        let mid = parseInt((left+right)/2);
        if( (mid * mid) <= x ){
            left = mid;
        } else {
            right = mid;
        }
    }
    return Math.floor(left); 
};

console.log(mySqrt(29792276))
console.log(mySqrt(9))
console.log(mySqrt(13))
console.log(mySqrt(3))
console.log(mySqrt(1))
console.log(mySqrt(4))
console.log(mySqrt(7))
console.log(mySqrt(17))