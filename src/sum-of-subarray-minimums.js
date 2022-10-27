/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumSubarrayMins = function(arr) {
    const MOD = 1000000007;
    const len = arr.length
    let sum = 0;
    for(let i = 0; i < len; i++){
        let min = arr[i]
        sum += min;
        for(let j = i+1; j < len; j++){
            min = Math.min(min, arr[j])
            sum += min
        }
    }
    return sum % MOD
};