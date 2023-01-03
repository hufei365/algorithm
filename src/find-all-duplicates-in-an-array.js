/**
 * https://leetcode.cn/problems/find-all-duplicates-in-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const n = nums.length
    let answer = []

    for(let i = 0; i < nums.length; i++){
        nums[(nums[i]-1)%n]+=n;// 知道为啥要加n吗？很巧妙的保留了原值
    }
    nums.forEach((x, i)=>{
        if(x > 2*n){
            answer.push(i+1)
        }
    })
    return answer
};

findDuplicates([4,3,2,7,8,2,3,1])