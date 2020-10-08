/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var arr = [];
    while( n > 0 ){
        n--;
        arr.push( getChar( n%26 ));
        n = parseInt(n/26)
    }
    return arr.reverse().join('')
};

function getChar(n){
    return String.fromCharCode( 65+n)
}
console.log( convertToTitle(1))
console.log( convertToTitle(26))
console.log( convertToTitle(27))
console.log( convertToTitle(52))
console.log( convertToTitle(53))
console.log( convertToTitle(701) )
console.log( convertToTitle(2*26*26+2*26+3))