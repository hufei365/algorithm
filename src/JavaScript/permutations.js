/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if( nums.length < 1) return [];
    if( nums.length === 1 ) return [nums];
    let results = [];

    for( let i = 0; i < nums.length; i++){
        let rest = nums.filter(v=>v!==nums[i]);
        results = results.concat(permute( rest).map( m => {
            m.unshift( nums[i]);
            return m;
        }))
    }
    return results;
};

console.log( permute([1,2,3]))