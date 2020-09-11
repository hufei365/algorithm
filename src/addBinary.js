/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let al = a.length, bl = b.length;

    let max = Math.max( al, bl );

    a = a.padStart(max, '0')
    b = b.padStart(max, '0')
    
    let last = 0, result = new Array(max);
    while(--max > -1){
        let x = +a[max], y = +b[max];
        let r = x + y + last;
        last = r > 1 ? 1 : 0;
        result[max] = r%2;
    }
    if ( last ) result.unshift('1');
    return result.join('');
};

console.log( addBinary( '11', '1'))