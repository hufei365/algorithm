/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let results = [];
        candidates.sort( (a,b)=>a-b);
        for( let i = 0; i < candidates.length; i++){
            if( candidates[i] === candidates[i-1]){
                continue;
            }
            let next = target - candidates[i];
            if( next > 0 ){
                let nextResults = combinationSum2( candidates.slice( i+1 ), next);
                if( nextResults.length ){
                    results = results.concat( nextResults.map(m=>{
                        m.unshift( candidates[i] );
                        return m;
                    }))
                }
            } else if( next === 0 ){
                results.push([candidates[i]])
            }
        } 
        return results;
    };

console.log(combinationSum2([2, 5, 2, 1, 2], 5))