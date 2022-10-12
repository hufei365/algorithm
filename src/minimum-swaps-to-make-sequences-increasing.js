/**
 * https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/submissions/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function (nums1, nums2) {
    const n = nums1.length;
       let a = 0, b = 1;
       for (let i = 1; i < n; i++) {
           let at = a, bt = b;
           a = b = n;
           if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1])  {
               a = Math.min(a, at);
               b = Math.min(b, bt + 1);
           }
           if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
               a = Math.min(a, bt);
               b = Math.min(b, at + 1);
           }
       }
       return Math.min(a, b);
   
   }

// const nums1 = [1,3,5,4], nums2 = [1,2,3,7];
// const nums1 = [3, 3, 8, 9, 10]
//     , nums2 = [1, 7, 4, 6, 8]
//     ;
const nums1 = [0,7,8,10,10,11,12,13,19,18]
const nums2 = [4,4,5,7,11,14,15,16,17,20]
console.log(minSwap(nums1, nums2))