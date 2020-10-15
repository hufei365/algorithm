/**
 * https://leetcode-cn.com/problems/find-common-characters/
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    if(A.length === 1) return A[0].split('');

    let min = 0, i = 1;
    while( A[i] ){
        if( A[min].length > A[i].length ){
            min = i;
        }
        i++;
    }
    let results = [];
    for( let j = 0; j < A[min].length; j++){
        let c = A[min][j], flag = true;
        for( let m = 0; m < A.length; m++){
            if( m !== min ){
                let pos = A[m].indexOf(c);
                if( pos === -1 ){
                    flag = false;
                    break;
                } else {
                    A[m] = A[m].substring(0, pos) + '0' + A[m].substring(pos + 1);
                }
            }
            
        }
        if( flag ) results.push( c );
    }

    return results;
};

console.log( commonChars(["bella","label","roller"]) )
console.log( commonChars(["cool","lock","cook"]) )