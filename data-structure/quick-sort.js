/**
 * 快速排序
 */

function quickSort(arr) {
    if (arr.length < 2) return arr;
    _quizSort( arr, 0, arr.length-1);
    return arr;
    
    function _quizSort(arr, low, high){
        if( low < high ){
            let mid = doSort( arr,low, high );
            _quizSort( arr, low, mid-1);
            _quizSort(arr, mid+1, arr.length-1)
        }
    }

    function doSort(arr, low, high){
        let pivot = arr[low];
        while( low < high ){
            while( low < high &&  arr[high] > pivot ){
                high--;
            }
            arr[low] = arr[high];
            while( low < high && arr[low] < pivot ){
                low++
            }
            arr[high] = arr[low]
        }
        arr[low] = pivot;
        return low;
    }
}



// console.log(quickSort([1, 2, 33, 4, 55, 331, 12, 34]))
console.log(quickSort([4, 13, 5, 6, 2, 9, 1]))