/**
 * https://leetcode.cn/problems/trapping-rain-water/
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const len = height.length;
    if (len < 3) {
        return 0
    }
    let sum = 0;
    let left = null;
    let i = 0;
    while (i < len) {
        if (height[i] > 0) {
            left = height[i];
            break;
        }
        i++;
    }

    while (i < len) {
        let j = i + 1;
        while (j < len) {
            if (height[j] < left) {
                j++
            } else {
                let x = i + 1;
                while (x < j) {
                    sum += (left - height[x++]);
                }
                left = height[j];
                i = j;
                j++;
            }
        }
        if (j === len && i < len - 2) {
            sum += trap(height.slice(i).reverse());
        }
        break;
    }
    return sum
};