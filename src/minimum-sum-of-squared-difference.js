/**
 * https://leetcode.cn/problems/minimum-sum-of-squared-difference/description/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
 var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    const differences = [];
    for(let i = 0; i < nums1.length; i++){
        const x = Math.abs(nums1[i] - nums2[i])
        x > 0 && differences.push(x)
    }

    const len = differences.length
    differences.sort((a, b)=> b-a)
    let count = k1+k2
    if(len === 1){
        differences[0] = differences[0] > count ? differences[0]-count : 0
    } else {
        while(count > 0 && differences.some(x=>x>0)){
                const next = findNextSmaller(differences, 0)
                for(let i = 0; i < differences.length; i++){
                    const x = differences[i];
                    if(x > next){
                        differences[i] = x-1;
                        count--
                    }
                    if(x < next || count ===0){
                        break;
                    }
                }
                if(count === 0 ) break;
        }
    }

    return differences.reduce((a, b)=>a+b**2, 0)

    // arr 有多个元素
    function findNextSmaller(arr, start){
        let next = null
        for(let i = start+1; i < arr.length; i++){
            if(arr[i] < arr[i-1] && arr[i] > 0){
                next = Math.max(arr[i-1]-1, arr[i])
                break;
            }
        }
        if(next === null){
            next = arr[0] === 1 ? 0 : (arr[0]-1)
        }
        return Math.max(next, 0)
    }
};

minSumSquareDiff([37,1,28,40,100,6,15,3,100,100,198,8,99,25,100,1,20,93,23,99,1,52,100,100,100,0,11,14,0,100,99,100,31,82,41,0,10,29,54,38,40,99,96,25,28,100,37,98,71,38,85,1,197,100,1,3,100,0,100,100,0,60,1,97,8,24,100,100,99,55,6,39,54,3,100,1,64,1,0,0,100,100,2,26,3,43,99,82,68,89,85,33,194,96,100,28,2,1,100,100], [37,98,0,92,0,5,88,100,6,3,99,77,0,100,199,100,24,95,34,0,100,53,200,196,0,99,30,83,97,37,0,3,49,83,57,100,54,42,70,82,27,2,28,40,24,1,37,1,84,50,86,98,100,199,100,100,3,100,6,200,97,73,92,1,36,25,0,1,0,74,78,39,67,100,199,100,64,100,100,100,200,0,99,27,16,48,3,13,88,76,86,44,97,192,0,89,98,98,199,199], 2013, 1152)
// minSumSquareDiff([18,4,8,19,13,8],[18,11,8,2,13,15], 16, 8)
// minSumSquareDiff([10,10,10,11,5],[1,0,6,6,1], 11, 27)
// minSumSquareDiff([1,4,10,12], [5,8,6,9], 10, 5)