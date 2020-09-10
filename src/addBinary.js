/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var last = 0, al = a.length, bl = b.length;
    var max = Math.max( al, bl);
    var result = new Array(max), i = max-1;
    while( i > -1 ){
        let x =  +(a[i] || 0),
            y =  +(b[i] || 0);
            last = x+y+ (last > 1 ? 1:0);
            
            result[i] = last%2;
            i--;
    }
    if( last > 1 ){
        result.unshift( 1 )
    }
    return result.join('')
};

console.log( addBinary('11', '1') )