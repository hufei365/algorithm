/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    var result = [];
    candidates.forEach( (v, i)=>{
        var rest = combinationSum2( candidates.slice(i+1), target-v);
        console.log(rest, target-v)
        rest.forEach( sub=>{
            result.push( [v, ...sub])
        })
    })
    return result;
};

console.log( combinationSum2([2,5,2,1,2], 5))