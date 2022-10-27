/**
 * @param {number[][]} source
 * @param {number[][]} target
 * @return {number}
 */
var minimumSwitchingTimes = function(source, target) {
    const m = source.length, n = source[0].length;
    const dp = new Map();
    let notFound = 0
    hash();
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            const cur = target[i][j];
            if(dp.has(cur) && dp.get(cur) > 0){
                dp.set(cur, dp.get(cur)-1)
            }else {
                notFound++
            }

        }
    }

    function hash(){
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                const cur = source[i][j];
                if(dp.has(cur)){
                    dp.set(cur, dp.get(cur)+1)
                } else {
                    dp.set(cur, 1)
                }
            }
        }
    }

    return notFound
};