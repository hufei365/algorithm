/**
 * https://leetcode.cn/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
 */


/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
    const K = [0, 1, 1];
    let i = 2
    while (K[i] < k) {
        K[i+1] = K[i] + K[i-1];
        i++
    }
    if(K[i] > k){
        i--
    }
    k -= K[i];
    let count = 1
    while (k) {
        for (let j = i; j > 0; j--) {
            if (K[j] <= k) {
                k -= K[j];
                i = j;
                count++;
                break;
            }
        }
    }
    return count
};

findMinFibonacciNumbers(5) // 1
findMinFibonacciNumbers(7) // 2