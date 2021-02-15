/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) return null;
    nums.sort((a, b) => a - b);
    var len = nums.length;
    var i, result = Number.MAX_SAFE_INTEGER, last;
    for (i = 0; i < len - 2 && last !== target; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        var start = nums[i] + nums[i + 1] + nums[i + 2];
        if (Math.abs( start - target) > result && start > target) {
            break;
        }
        var end = nums[i] + nums[len - 2] + nums[len - 1];
        if (Math.abs( end - target ) > result && end < target ) {
            break;
        }
        var left = i+1, right = len - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            var newAbs = Math.abs( sum - target);
            if( newAbs === 0 ){
                last = sum;
                break;
            } else if( last !== target && newAbs < result ){
                result = newAbs;
                last = sum;
                if( sum < target ) {
                    left++;
                } else if( sum > target ){
                    right--;
                }
            } else if( sum < target ) {
                left++;
            } else if( sum > target ){
                right--;
            }
        }
    }
    return last;
};

// [1,1,1,0]
// -100
console.log( threeSumClosest([0,2,1,-3], 1))
console.log( threeSumClosest([1,1,1,0], -100))
console.log( threeSumClosest([1,1,-1,-1,3], -1))