/**
 * @param {string} digits
 * @return {string[]}
 */

// BFS
var letterCombinations = function(digits) {
    var MAP = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    if( digits.length === 0 ) return [];
    var results = MAP[digits[0]];
    var i = 1;
    while( digits[i] ){
        var newStr = MAP[digits[i]];
        var newResult = [];
        newStr.forEach( v=>{
            results.forEach( r=>{
                newResult.push( r+v )
            })
        } )
        results = newResult;
        i++;
    }

    return results;
};


// DFS
var letterCombinations = function(digits) {
    var MAP = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    if( digits.length === 0 ) return [];
    var results = [];

    function walk(curStr, i){
        if( digits[i] ){
            MAP[digits[i]].forEach( c=>{
                walk( curStr+c, i+1)
            })
        } else {
            results.push( curStr )
        }
    }
    walk("", 0)
    return results;
};
console.log(letterCombinations("23"))