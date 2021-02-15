/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let total = m+n;
    let i = 0, j = 0;

    while( i < total || j < n ){
        if( nums1[i] >= nums2[j] ){
            for( let x = m; x > i; x--){
                nums1[x] = nums1[x-1];
            }
            m++;
            nums1[i] = nums2[j];
            j++;
        } else { 
            i++;
        }
    }
    if( j < n ){
        for( let x = j; x < n; x++){
            nums1[total-(n-x)] = nums2[x];
        }
    }
};

var nums1 =  [4,5,8,0,0,0,0,0], nums2 = [2,4,7,9,10];
console.log(merge(nums1, 3, nums2, nums2.length ));

console.log( nums1 )