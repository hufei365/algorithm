/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 示例 1：
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 * 
 * 示例 2：
 * 输入：nums = [2,0,1]
 * 输出：[0,1,2]
 * 
 * 示例 3：
 * 输入：nums = [0]
 * 输出：[0]
 * 
 * 示例 4：
 * 输入：nums = [1]
 * 输出：[1]
 *  
 * 提示：
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] 为 0、1 或 2
 * 
 * 进阶：
 * 你可以不使用代码库中的排序函数来解决这道题吗？
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/sort-colors
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const len = nums.length;
    if (len === 1) return null;
    let left = 0, right = len-1;
    while(left<right){
        if(nums[left] > nums[right]){
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
        
    }
};

const arr7 = [1,2,2,2,2,0,0,0,1,1];
sortColors(arr7);
console.log(arr7);

const arr6 = [1,1,0];
sortColors(arr6);
console.log(arr6);

const arr5 = [1, 0];
sortColors(arr5);
console.log(arr5);

const arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);

const arr1 = [2,0,1];
sortColors(arr1);
console.log(arr1);

const arr2 = [0];
sortColors(arr2);
console.log(arr2);

const arr3 = [0,1];
sortColors(arr3);
console.log(arr3);

const arr4 = [2,0];
sortColors(arr4);
console.log(arr4);