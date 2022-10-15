/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
    let pointer = 0, i = 1;
    const result = [];
    while(pointer < target.length){
        if(target[pointer] === i){
            i++, pointer++;
            result.push('Push')
        } else {
            if(i < target[pointer]){
                result.push('Push')
                result.push('Pop')
                i++;
            }
        }
    }
    return result
};