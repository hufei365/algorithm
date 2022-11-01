/**
 * https://leetcode.cn/problems/median-of-two-sorted-arrays/description/?favorite=2cktkvj
 * 变相的快速排序
 * 时间复杂度 O(log(m+n))
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    const total = m + n;
    const mid = total % 2 === 1 ? Math.floor(total / 2) : total / 2

    if (m === 0 || n === 0 || nums1[m - 1] <= nums2[0]) {
        if (total % 2 === 1) {
            return getNum(mid)
        } else {
            return (getNum(mid) + getNum(mid - 1)) / 2
        }
    } else if (nums1[0] >= nums2[n - 1]) {
        if (total % 2 === 1) {
            return mid < n ? nums2[mid] : nums1[mid - n]
        } else {
            return ((mid < n ? nums2[mid] : nums1[mid - n]) + ((mid - 1) < n ? nums2[mid - 1] : nums1[mid - 1 - n])) / 2
        }
    } else {
        quickSort(0, total - 1);
    }

    if (total % 2 === 1) {
        return getNum(mid)
    } else {
        return (getNum(mid) + getNum(mid - 1)) / 2
    }

    function quickSort(left, right) {
        if (left >= right) return;
        let start = left, end = right;
        const base = getNum(left);
        while (start < end) {
            while (start < end && getNum(end) > base) end--
            if (start < end) {
                setNum(start, getNum(end))
                start++;
            }
            while (start < end && getNum(start) <= base) start++
            if (start < end) {
                setNum(end, getNum(start))
                end--
            }
        }
        setNum(start, base)

        quickSort(left, start - 1)
        quickSort(start + 1, right)
    }

    function getNum(index) {
        return index < m ? nums1[index] : nums2[index - m]
    }
    function setNum(index, value) {
        if (index < m) {
            nums1[index] = value
        } else {
            nums2[index - m] = value
        }
    }
};