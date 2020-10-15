function nextGreaterElement(nums) {
    const ans = new Array(nums.length); // 存放答案的数组
    const s = [];
    for (let i = nums.length - 1; i >= 0; i--) { // 倒着往栈里放
        while (s.length && s[s.length-1] <= nums[i]) { // 判定个子高矮
            s.pop(); // 矮个起开，反正也被挡着了。。。
        }
        ans[i] = s.length === 0 ? -1 : s[s.length-1]; // 这个元素身后的第一个高个
        s.push(nums[i]); // 进队，接受之后的身高判定吧！
    }
    return ans;
}

console.log( nextGreaterElement( [2,1,2,4,3]) );