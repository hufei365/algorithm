/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var memo = Object.create(null);

    return _getStars( n );
    function _getStars(n){
        if(n == 1) return 1;
        if(n == 2 ) return 2;
        if(memo[n]) return memo[n];
        var total = 0;
        for(var i = 3; i <= n; i++){
            memo[i] = _getStars(i-1) + _getStars(i-2)
        }
        return memo[n]
    }
};

console.log( climbStairs(45) )

/**
 * x+2y = n;
 * 1:
 * 1
 * 
 * 2:
 * 1+1
 * 2
 * 
 * 3:
 * 1+2;
 * 2+1;
 * 1+1+1
 *
 * 4:
 * 1+1+1+1
 * 1+2+1
 * 1+1+2
 * 2+1+1
 * 2+2
 * 
 * 5:
 * 1+1+1+1+1
 * 2+1+1+1
 * 1+2+1+1
 * 1+1+2+1
 * 1+1+1+2
 * 2+2+1
 * 2+1+2
 * 1+2+2
 */