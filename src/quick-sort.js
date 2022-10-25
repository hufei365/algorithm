var sort = function (arr) {
    const len = arr.length
    function doSort(start, end) {

        if (start >= end) return null
        const base = arr[start]
        let left = start, right = end;
        while (left < right) {
            while (left < right && arr[right] > base) right--
            if (left < right) {
                arr[left++] = arr[right]
            }
            while (left < right && arr[left] < base) left++
            if (left < right) {
                arr[right--] = arr[left]
            }
        }
        arr[left] = base
        doSort(start, left - 1)
        doSort(left + 1, end)

    }

    function swap(i, j) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    doSort(0, len - 1)

    console.log(arr)
}

const arr = [1, 2, 8, 4, 3, 9, 5, 7, 6, 0]
//           0, 1, 2, 3, 4, 5, 6, 7, 8

sort(arr)
sort([])
sort([1])
sort([1, 2])
sort([4, 2])
sort([1, 2, 3])
sort([10, 2, 3])
sort([3, 4, 3])
sort([3, 4, 4, 4, 4, 4, 4, 3])