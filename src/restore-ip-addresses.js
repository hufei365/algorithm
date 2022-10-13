/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    
    return getItem(s, 4)
    
    function getItem(s, count){
        if(s.length < count || s.length > 3*count){
            return []
        }
        if(count === 1 && Number(s) >= 0 && Number(s) <= 255 && ( s.length > 1 && s[0] !== '0' || s.length === 1)){
            return [s]
        }
        let i = 1, result = [];
        while(i <= 3){
            let sHead = s.slice(0, i)
            let head = Number(sHead)

            if( ((sHead[0] !== '0' && i > 1) || i === 1) && head >= 0 && head <= 255){
                const restStr = s.slice(i)
                    const subResult = getItem(restStr, count-1)
                    result = result.concat(subResult.map(rest => {
                        return `${String(head)}.${rest}`
                    }))
            }
            i++
        }
        return result
    }
};

console.log(restoreIpAddresses("25525511135"))