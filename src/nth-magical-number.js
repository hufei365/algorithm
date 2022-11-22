/**
 * https://leetcode.cn/problems/nth-magical-number/description/?languageTags=javascript
 */

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var nthMagicalNumber = function (n, a, b) {
    const MOD = 1000000007
    if (a % b === 0) return n * b % MOD
    if (b % a === 0) return n * a % MOD

    const step = getLcm(a, b);
    const stepCount = step / a + step / b - 1;

    const mod = n % stepCount
    const steps = Math.floor(n / stepCount)
    if (mod === 0) return steps * step % MOD

    let mods = step;
    let i = 0, j = 0;

    for (let x = 0; x < mod; x++) {
        const aa = a * (i + 1), bb = b * (j + 1)
        aa > bb ? j++ : i++
        mods = Math.min(aa, bb)
    }
    return (steps * step + mods) % MOD
};

function getGcd(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    if (max % min === 0) {
        return min;
    } else {
        return getGcd(max % min, min);
    }
}

function getLcm(a, b) {
    return a * b / getGcd(a, b);
}