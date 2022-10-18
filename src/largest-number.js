/**
[50, 2, 5, 9] => 95502
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    for(let i = 0; i < nums.length; i++){
        
        for(let j = i; j < nums.length; j++){
            const a = nums[i], b = nums[j];
            if(( Number(String(a)+String(b)) < Number(String(b)+String(a)))){
                nums[i] = b;
                nums[j] = a;
            }
        }
    }
    
    let i = 0;
    while(i < nums.length && nums[i] === 0){
        i++
    }

    return i === nums.length ? '0' : nums.slice(i).join('')
};

console.log(largestNumber([50, 2, 5, 9]))