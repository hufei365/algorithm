/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var i; var m = {};
    nums.sort(function(a,b){return a-b;});
    for( i = 0; i < nums.length; i++){
        if( nums[i] !== nums[i-1] && nums[i] !== nums[i+1]) break;
    }
    return nums[i];
};

console.log( singleNumber([2,2,1]))