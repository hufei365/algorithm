/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    s = s.split('').reverse();
    var result = 0;
    s.forEach((v,i)=>{
        result += Math.pow( 26, i)*(v.charCodeAt()-65 + 1);
    })
    return result;
};

console.log( titleToNumber('A'))
console.log( titleToNumber('AB'))
console.log( titleToNumber('AZ'))
console.log( titleToNumber('BA'))
console.log( titleToNumber('BBC'))