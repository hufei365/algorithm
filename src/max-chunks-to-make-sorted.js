/**
 * @param {number[]} arr
 * @return {number}
 */``
var maxChunksToSorted = function (arr) {
    const n = arr.length;
    if (n === 1) return 1;
    const copyArr = [...arr];
    copyArr.sort((a, b) => a - b)

    let count = 0;
    let max = null, min = Number.MAX_VALUE
    for (let i = n - 1; i >= 0; i--) {
        if (max === null) {
            if(arr[i] !== copyArr[i]){
                max = copyArr[i]
                min = arr[i]
            } else {
                i > 0 && count++
            }
        } else {
            min = Math.min(arr[i], min)
            if(arr.indexOf(copyArr[i]) >= i && copyArr.indexOf(min) >= i && i > 0){
                count++;
                max = null, min = Number.MAX_VALUE
            }
     
        }
        if(i === 0 ){
            count++
        }
    }
    return count;

};


console.log(maxChunksToSorted([4,2,1,3,5,0]) === 1)
console.log(maxChunksToSorted([2, 0, 1]) === 1)
console.log(maxChunksToSorted([1,2,3,4,5,0]) === 1)
console.log(maxChunksToSorted([0, 2, 1, 4, 3]) === 3)
console.log(maxChunksToSorted([0, 1, 3, 2]) === 3)
console.log(maxChunksToSorted([0, 2, 1]) === 2)
console.log(maxChunksToSorted([1, 0, 2, 3, 4]) === 4)
console.log(maxChunksToSorted([4, 3, 2, 1, 0]) === 1)
console.log(maxChunksToSorted([0]) === 1)
console.log(maxChunksToSorted([0, 1]) === 2)