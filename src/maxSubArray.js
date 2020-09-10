/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var len = nums.length;

    if (len === 1) return nums[0];

    return _maxSubArr( nums, 0, len-1)

    function _maxSubArr(arr, left, right){
        if( left === right ){
            return arr[left]
        }

        let center = parseInt( (left+right)/2 );

        let leftSum = _maxSubArr( arr, left, center );
        let rightSum = _maxSubArr( arr, center+1, right );

        let leftMax = arr[center], leftBorder = 0;
        for( var i = center; i >= left; i--){
            leftBorder+=arr[i]
            leftMax = Math.max( leftBorder, leftMax)
        }

        let rigthMax = arr[center+1], rightBorder = 0;
        for( var i = center+1; i <= right; i++){
            rightBorder+=arr[i]
            rigthMax = Math.max( rightBorder, rigthMax)
        }

        return Math.max( leftSum, rightSum, leftMax+rigthMax )
    }
};

// console.log( maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log( maxSubArray([-2,-1]))
console.log( maxSubArray([8,-19,5,-4,20]))


// var maxSubArray = function(nums) {
//     var len = nums.length;

//     if (len === 1) return nums[0];

//     var max = nums[0];
//     // 暴力解法
//     for(var i = 0; i < len; i++){
//         var curMax = nums[i], curSum = nums[i];
//         for( var j = i+1; j < len; j++){
//             curSum += nums[j];
//             curMax = Math.max(curSum, curMax);
//         }
//         max = Math.max( curMax ,max)
//     }
//     return max;
// };