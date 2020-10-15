/**
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 
 * 示例 1:
 * 
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 示例 2:
 * 
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/maximum-product-subarray
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var len = nums.length;

    if (len === 0) return -Infinity;
    if (len === 1) return nums[0];

    var max = nums[0];
    var products = new Array(len);
    var i = 0, j = len-1;
    for( ; j > 0; j-- ){
        products[j] = maxSubArray(nums.slice(0, j-1)) * nums[j]
    }
};

// console.log(maxProduct([-2,-2,-3,0,-3,1,-3]))
// console.log(maxProduct([0,-2,0]))

//**FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory



function f1(){
    return g1().then(()=>{
        return f2();
    }, ()=>{
        console.log('f1 reject')
    })
}

function f2(){
    return g2().then(()=>{
        console.log('f2')
    }, ()=>{
       console.log('f2 reject') 
    })
}

function g1(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, 1000)
    })
}

function g2(){
    return new Promise((resolve,reject)=>{
        setTimeout(reject, 1000)
    })
}


f1().then(()=>{
    console.log(Date.now())
})