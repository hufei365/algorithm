/**
 * https://leetcode-cn.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var memo = Object.create(null);

    function _generate(numRows){
        if( numRows === 0 ) return [];
        if( numRows === 1 ) return [[1]];
        if( numRows === 2 ) return [[1], [1,1]];
        if( memo[numRows] ) return memo[numRows];

        for(var i = 3; i <= numRows; i++){
            var prev = _generate( i-1 );
            var lastLevel = prev[prev.length-1]
            memo[i] = [...prev];
            var result = [1];
            for( var j = 1; j < lastLevel.length; j++){
                result.push( lastLevel[j-1] + lastLevel[j] )
            }
            result.push(1);
            memo[i].push(result)
        }

        return memo[numRows];
    }
    return _generate( numRows );
};

// console.log( generate(0))
// console.log( generate(1))
console.log( generate(2))
console.log( generate(3))
console.log( generate(4))