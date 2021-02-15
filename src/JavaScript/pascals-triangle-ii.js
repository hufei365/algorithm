/**
 * https://leetcode-cn.com/problems/pascals-triangle-ii/
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var memo = Object.create(null);

    function _generate(rowIndex){
        if( rowIndex === 0 ) return [];
        if( rowIndex === 1 ) return [1];
        if( rowIndex === 2 ) return [1,1];
        if( memo[rowIndex] ) return memo[rowIndex];

        for(var i = 3; i <= rowIndex; i++){
            var lastLevel = _generate( i-1 );
            memo[i] = [1];
            for( var j = 1; j < lastLevel.length; j++){
                memo[i].push( lastLevel[j-1] + lastLevel[j] )
            }
            memo[i].push(1);
        }

        return memo[rowIndex];
    }
    return _generate( rowIndex );
};

console.log(getRow(5))