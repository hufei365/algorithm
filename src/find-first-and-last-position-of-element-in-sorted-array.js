/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 * 示例 1:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 示例 2:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var searchRange = function (nums, target) {
    if( nums.length === 0 ){
        return [-1, -1]
    }
    
    function _search(nums, left, right ){
        let start = null,end = null;
        if( left === right ){
            return nums[left] === target ? [left, left] : [-1, -1];
        } else if(left < right ){
            let mid = Math.floor( (left+right)/2);
            if( mid === left ){
                if( nums[right] === target){
                    end = right;
                }
                if(nums[left] === target ){
                    start = left;
                }
                if( start === null && end === null) {
                    start = end = -1;
                } else if(start === null){ 
                    start = end;
                } else if( end === null){
                    end = start
                }


                return [start, end]
            }
            if( nums[mid] < target ){
                return _search( nums, mid, right)
            } else if( nums[mid] > target ){
                return _search( nums, left, mid )
            } else if( nums[mid] === target ){
                start = end = mid;
                if( mid > left ){
                    let newStart = _search(nums, left, mid-1)[0];
                    start = newStart > -1 ? Math.min( newStart, mid) : start;
                }
                if( mid < right ){
                    end = Math.max( mid, _search( nums, mid+1, right)[1])
                }
                if( start === end ){
                    return [start, end]
                } else {
                    return [start, end]
                }
            }
        }
    }
    return _search( nums, 0, nums.length-1 )
};

console.log( searchRange([1,1,2], 1))
console.log( searchRange([2,2], 2))
console.log( searchRange([5,7,7,8,8,10], 7))
console.log( searchRange([5,7,7,8,8,10], 8))
console.log( searchRange([5,7,7,8,8,10], 10))
console.log( searchRange([5,7,7,8,8,10], 11))