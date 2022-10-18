/**
 * 给定一个按 非递减顺序 排列的数字数组 digits 。你可以用任意次数 digits[i] 来写的数字。例如，如果 digits = ['1','3','5']，我们可以写数字，如 '13', '551', 和 '1351315'。
 * 返回 可以生成的小于或等于给定整数 n 的正整数的个数 。
 * 示例 1：
        输入：digits = ["1","3","5","7"], n = 100
        输出：20
        解释：
        可写出的 20 个数字是：
        1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.
 * 示例 2：
        输入：digits = ["1","4","9"], n = 1000000000
        输出：29523
        解释：
        我们可以写 3 个一位数字，9 个两位数字，27 个三位数字，
        81 个四位数字，243 个五位数字，729 个六位数字，
        2187 个七位数字，6561 个八位数字和 19683 个九位数字。
        总共，可以使用D中的数字写出 29523 个整数。
 * 示例 3:
        输入：digits = ["7"], n = 8
        输出：1
 */
/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
 var atMostNGivenDigitSet = function (digits, n) {
    let count = 0;
    let nums = String(n).split('')
    const dLen = digits.length
    const len = nums.length
    if (len === 1) return (digits.filter(d => Number(d) <= n) || []).length

    const minLen = new Array(len).fill(0), equalLen = new Array(len).fill(0)
    for (let i = 0; i < len; i++) {
        if (i > 0) {
            // 总位数小于目标数的case
            count += Math.pow(dLen, len - i)

        }
        digits.forEach(d => {
            if (d < nums[i]) {
                minLen[i]++
            } else if (d === nums[i]) {
                equalLen[i] = 1
            }
        })
    }
    // 最大位小的case
    if(minLen[0] !== 0){
        count += minLen[0]*Math.pow(dLen, len-1)
    }

    // 前n位相等的case
    equalLen.some((e, i)=>{
        if(e === 1 && i < len-1){
            count += minLen[i+1]*Math.pow(dLen, len - i -2)
        }
        return e === 0

    })
    // 相等的case
    if(equalLen.includes(0) === false) {
        count++
    }
    
    return count
};

console.log(atMostNGivenDigitSet(["1", "3", "5", "7"], 542))