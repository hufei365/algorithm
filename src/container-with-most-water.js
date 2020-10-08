/**
 * https://leetcode-cn.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     var max = 0, i = 0, j = 1;
//     for(i = 0; i < height.length; i++){
//         for( j = 1; j < height.length; j++){
//             max = Math.max( max, Math.min(height[i], height[j]) * (j-i));
//         }
//     }
//     return max;
// };

var maxArea = function(height) {
    var i = 0, j = height.length - 1, max = 0
    while (i < j) {
        max = Math.max(max, (j - i) * (height[i] > height[j] ? height[j--]: height[i++]))
    }
    return max
};


console.log(maxArea( [1,8,6,2,5,4,8,3,7] ))
