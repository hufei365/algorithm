/**
 * @param {number} n
 * @return {number}
 */
 var magicalString = function(n) {
    if( n === 1 ) return 1
    let result = 1
    const counts = [1,2];
    let s = '1';
    let strPointer = 0, countPointer = 1;
    while(s.length < n){
        const lastChar = s[strPointer];
        const nextChar = lastChar === '1' ? '2' : '1'
        const nextCount = counts[countPointer++]
        let i = 0;
        while(i++<nextCount && s.length < n){
            if(s.length === counts.length){
                counts.push(Number(nextChar))
            }
            s+=nextChar
            strPointer++
            if(nextChar === '1') result++
        }
    }
    console.log(s)

    return result
};

console.log(magicalString(1))
console.log(magicalString(2))
console.log(magicalString(3))
console.log(magicalString(4))
console.log(magicalString(6))