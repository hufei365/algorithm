/**
 * 
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 * 链接：https://leetcode-cn.com/problems/next-permutation
 */


/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var nextPermutation = function (nums) {
    if (nums.length === 1) return nums;


    let i = nums.length - 1, flag = true;
    while (i > 0 && flag) {
        if (nums[i - 1] < nums[i]) {
            flag = false;
            let high = nums.length - 1, low = i;

            while (high > low) {
                [nums[high], nums[low]] = [nums[low], nums[high]];
                low++; high--;
            }
            low = i;
            while( low < nums.length ){
                if( nums[i-1] < nums[low]){
                    [nums[i-1], nums[low]] = [nums[low], nums[i-1]]; break;
                }
                low++;
            }
        }
        i--;
    }
    if( i === 0 && flag === true ){
        let high = nums.length - 1;
        while( i < high ){
            [nums[high], nums[i]] = [nums[i], nums[high]];
            i++; high--;
        }
    }

    console.log( nums )
};

nextPermutation([1,3,2])
nextPermutation([2,2,4,0,1,2,4,4,0])
nextPermutation([4,2,0,2,3,2,0])
nextPermutation([2,2,0,4,3,1])
nextPermutation([5,4,7,5,3,2])
nextPermutation([1,2,3])
nextPermutation([3,2,1])
nextPermutation([3,12,1])
nextPermutation([1,1,5])
nextPermutation([1,5,1])
