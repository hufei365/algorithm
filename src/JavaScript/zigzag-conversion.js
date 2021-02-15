/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if( numRows === 1) return s;
    let len = s.length;
    let step = 2*(numRows-1);
    let cols = Math.floor( len / step );

    let result = '';
    let row = 0, col = 0, curStep = step;
    while( row < numRows ){
        col = 0;
        while( col < (cols+1) ){
            result += s[col*step+row]||""
            if( row !== 0 && row < (numRows-1)){
                result += s[curStep+ col*step+row]||'';
            }
            col++;
        }
        row++;
        curStep = step - row*2
    }
    return result;
};

console.log( 'A' === convert("A", 1))
// console.log( 'PAYPALISHIRING' === convert("PAYPALISHIRING", 3))
