/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let mid = s.length >> 1, offset = 0;
    if ((s.length | 1) > s.length) {
        mid--;
    }
    let palindrom = '';
    while (mid - offset >= 0) {
        walk(mid-offset);
        walk(mid+offset);
        offset++;
    }
    return palindrom;
    function walk(start) {
        let i, j, cur="";
        i = start - 1; j = start + 1;
        cur = s[start];
        while (i > -1 && j < s.length) {
            if (s[i] === s[j]) {
                cur = s[i] + cur + s[j];
                i--; j++;
            } else {
                break;
            }
        }
        if (cur.length >= palindrom.length) {
            palindrom = cur;
        }
        cur = ""
        i = start; j = start + 1;
        while (s[i] && s[i] === s[j]) {
            cur = s[i] + cur + s[j];
            i--; j++;
        }
        if (cur.length >= palindrom.length) {
            palindrom = cur;
        }
        cur = ""
        i = start - 1; j = start;
        while (s[i] && s[i] === s[j]) {
            cur = s[i] + cur + s[j];
            i--; j++;
        }
        if (cur.length >= palindrom.length) {
            palindrom = cur;
        }
        cur = ""
    }
};



console.log(longestPalindrome('caba'))
console.log( longestPalindrome('a'))
console.log( longestPalindrome(''))
console.log(longestPalindrome('abba'))
console.log(longestPalindrome('abcba'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))


