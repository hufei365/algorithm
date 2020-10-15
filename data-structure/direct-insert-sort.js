/**
 * 直接插入排序
 */

function directInsertSort(arr) {
    if (arr.length < 2) return arr;
    let x = 0;
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (let j = i - 1; j > -1; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j];
                arr[j] = temp;
                x += 2;
            }
            x++;
        }
    }
    console.log(x);
    return arr;
}

console.log( [4, 5, 7, 6, 3, 2, 1] )
let r = directInsertSort([4, 3,4,5,6,7,8,9,0,12,11,1,25, 37, 56, 23, 32, 1])
console.log( r )