/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var result = "", fix = [["V", "X"], ["L", "C"], ["D", "M"]], meta = ["I", "X", "C", "M"];
    var mod = num%10, i = 0;
    while( num > 0 ){
        var cur = "";
        if( mod > 0 ){
            if( mod < 4 ){
                cur = meta[i].repeat(mod)
            } else if( mod === 4 ) {
                cur = meta[i]+fix[i][0]
            } else if( mod === 5){
                cur = fix[i][0]
            } else if( mod === 9) {
                cur = meta[i]+fix[i][1]
            }else {
                cur = fix[i][0] + meta[i].repeat(mod-5)
            }
        }
        result = cur + result;
        i++;
        num = Math.floor( num/10 );
        mod = num%10;
    }
    return result;
};

console.log( intToRoman(3999))
console.log( intToRoman(13))
console.log( intToRoman(14))
console.log( intToRoman(7))