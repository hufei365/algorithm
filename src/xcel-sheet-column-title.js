/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    return getNum( n );

    function getNum(num){
        if( num === 0 ) return "Z";
        var i = 0, total = num;
        while( num > 26 ){
            i++;
            num = Math.floor(num / 26);
        }
        return String.fromCharCode(64+num) + (i===0 ? "" : getNum(total - num*Math.pow(26, i)));
    }
};

console.log(convertToTitle(53));
console.log(convertToTitle(52));
console.log(convertToTitle(26));