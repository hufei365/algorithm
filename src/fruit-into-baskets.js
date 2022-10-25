/**
 * https://leetcode.cn/problems/fruit-into-baskets/
 */
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    const len = fruits.length
    if (len <= 2) return len;

    let i = 0;
    let x = i, y = null;
    let count = 1
    while (i < len) {
        if (fruits[i] !== fruits[x]) {
            y = i;
            i++
            break;
        }
        i++
    }
    if (y === null) return len

    while (i < len) {
        while (i < len && fruits[i] === fruits[x] || fruits[y] === fruits[i]) {
            i++;
        }

        if (i < len) {
            count = Math.max(i - x, count)
            let j = i - 1
            while(j > x && fruits[j] === fruits[i-1]){
                j--
            }
            x = j+1;
            y = i;
            i = y + 1
        } else {
            count = Math.max(i - x, count)
        }
    }
    return count
};

console.log(totalFruit([0, 1, 6, 6, 4, 4, 6]))
console.log(totalFruit([3, 3, 3, 3, 3, 3]))
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]))
console.log(totalFruit([1, 2, 1]))
console.log(totalFruit([0, 1, 2, 2]))
console.log(totalFruit([1, 2, 3, 2, 2]))