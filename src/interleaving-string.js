/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    if (s1[0] !== s3[0] && s2[0] !== s3[0]) return false;

    if (s1.length === 0 && s2 === s3) return true
    if (s2.length === 0 && s1 === s3) return true

    const memo = Object.create(null)

    function doCompare(p1, p2, p3) {
        if(p1 === s1.length){
            return s2.slice(p2) === s3.slice(p3)
        }
        if(p2 === s2.length){
            return s1.slice(p1) === s3.slice(p3)
        }
        if (memo[`k_${p1}_${p2}_${p3}`] !== undefined) {
            return memo[`k_${p1}_${p2}_${p3}`]
        }

        let e1 = s1[p1] === s3[p3], e2 = s2[p2] === s3[p3];
        let r1 = false, r2 = false;
        if (e1) {
            r1 = doCompare(p1 + 1, p2, p3 + 1)
        }
        if (e2 && r1 === false) {
            r2 = doCompare(p1, p2 + 1, p3 + 1)
        }
        memo[`k_${p1}_${p2}_${p3}`] = r1 || r2
        return r1 || r2
    }
    return doCompare(0, 0, 0)
};


console.log(
    isInterleave('aabcc',
        'dbbca',
        'aadbbcbcac'
    )
)
