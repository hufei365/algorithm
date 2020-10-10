/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return [];
    nums.sort((a, b) => a - b)
    var len = nums.length;
    var i, j, results = [];
    for (i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break;
        }
        if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
            continue;
        }

        for (j = i + 1; j < len - 2; j++) {
            var left = j + 1, right = len - 1;
            if (j > i+1 && nums[j] === nums[j - 1] ) { continue; }
            if( nums[i] + nums[j] + nums[j+1] + nums[j+2] > target ){
                break;
            }
            if( nums[i] + nums[j] + nums[len-2] + nums[len-1] < target ){
                continue;
            }

            while (left < right) {
                var sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    results.push([nums[i], nums[j], nums[left], nums[right]]);
                    while( left < right && nums[left] === nums[left+1]){
                        left++;
                    }
                    left++;
                    while( left < right && nums[right] === nums[right-1]){
                        right--;
                    }
                } else if (sum > target) {
                    right--;
                } else if (sum < target) {
                    left++;
                    right = len - 1;
                }
            }
        }
    }
    return results;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0))
console.log(fourSum([-1,-5,-5,-3,2,5,0,4], -7))
console.log(fourSum([0,0,0,0], 0))