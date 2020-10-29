var smallerNumbersThanCurrent = function(nums) {
    let copy = [].concat(nums); nums.sort((a,b)=>a-b)

    let results = new Map(), cur = nums.length-1;
    for(let i = nums.length-1; i > -1; i--){
        if( nums[i-1] === nums[i] ){
            continue;
        }
        results.set(nums[i], i);
    }

    return copy.map( v=>{
        return results.get(v);
    })
};

console.log( smallerNumbersThanCurrent([8,1,2,2,3]))