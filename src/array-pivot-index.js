/**
 * 给你一个整数数组 nums，请编写一个能够返回数组 “中心下标” 的方法。
 * 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心下标，返回 -1 。如果数组有多个中心下标，应该返回最靠近左边的那一个。

 * 注意：中心下标可能出现在数组的两端。
 * 示例 1：
 * 输入：nums = [1, 7, 3, 6, 5, 6]
 * 输出：3
 * 解释：
 * 中心下标是 3 。
 * 左侧数之和 (1 + 7 + 3 = 11)，
 * 右侧数之和 (5 + 6 = 11) ，二者相等。
 
* 示例 2：
 * 输入：nums = [1, 2, 3]
 * 输出：-1
 * 解释：
 * 数组中不存在满足此条件的中心下标。

* 示例 3：
 * 输入：nums = [2, 1, -1]
 * 输出：0
 * 解释：
 * 中心下标是 0 。
 * 下标 0 左侧不存在元素，视作和为 0 ；
 * 右侧数之和为 1 + (-1) = 0 ，二者相等。
 
 * 提示：
 *      nums 的长度范围为 [0, 10000]。
 *      任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。

 * 作者：力扣 (LeetCode)
 * 链接：https://leetcode-cn.com/leetbook/read/array-and-string/yf47s/
 * 来源：力扣（LeetCode）
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

var pivotIndex = function(arr) {
    if (arr.length === 0) return 0;
    let left = 0, right = arr.reduce((a, b) => a+b)-arr[0];
    let i = 0;
    while(i<arr.length){
        // console.log(left, right)
        if(left === right) break;
        i++,left+=arr[i-1], right-=arr[i];
    }
    return i >= arr.length ? -1 : i;
}

console.log(f([1, 7, 3, 6, 5, 6]));
console.log(f([1, 2, 3]));
console.log(f([2, 1, -1]));