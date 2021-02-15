/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 
 * 你可以假设数组中不存在重复的元素。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 示例 1:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 * 示例 2:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function (nums, target) {

    function _search(nums, left, right) {
        if (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[right] < nums[mid] && target < nums[mid] && target > nums[right]) {
                return _search(nums, left, mid);
            } else if (nums[right] > nums[mid] && (target > nums[right] || target < nums[mid])) {
                return _search(nums, left, mid)
            } else if (mid === left) {
                return nums.indexOf(target);
            } else {
                return _search(nums, mid, right)
            }
        } else {
            return nums.indexOf(target);
        }
    }
    return _search(nums, 0, nums.length - 1)
};

console.log(search([1, 3], 2))
console.log(search([1], 1))
console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([4, 5, 6, 7, 0, 1, 2], 5))
console.log(search([6, 7, 0, 1, 2, 4, 5], 0))
console.log(search([6, 7, 0, 1, 2, 4, 5], 4))
console.log(search([6, 7, 0, 1, 2, 4, 5], 11))