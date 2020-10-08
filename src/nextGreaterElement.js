/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


var nextGreaterElement = function (nums1, nums2) {

    var s = [];

    var len = nums2.length;
    var r = new Array(nums1.length);

    for (let j = len - 1; j > -1; j--) {
        let i = nums1.indexOf(nums2[j]);
        if (i > -1) {
            while (s.length && s[s.length - 1] <= nums2[j]) {
                s.pop();
            }
            r[i] = s.length === 0 ? -1 : s[s.length - 1]
        }
        s.push(nums2[j])
    }

    return r;
};

var nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2))

var nextGreaterElements = function (arr) {
    var len = arr.length;
    var r = new Array(len), s = [];

    for (var i = len*2 - 1; i > -1; i--) {
        while (s.length && s[s.length - 1] <= arr[i%len]) {
            s.pop()
        }
        r[i%len] = s.length === 0 ? -1 : s[s.length - 1];
        s.push(arr[i%len])
    }
    return r;
};