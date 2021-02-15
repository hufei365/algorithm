/**
 * 冒泡排序
 * @params 
 *  arr: Array
 * @return Array
 */

 function bubbleSort(arr){
     if(arr.length < 2 ) return arr;

     for( let i = 0; i < arr.length; i++){
         let flag = false;
        for( let j = arr.length - 1; j > i; j--){
            if( arr[j] < arr[j-1]){
                [arr[j], arr[j-1] ] = [arr[j-1], arr[j]]
                flag = true;
            }
        }
        if( flag === false ) break;
     }
     return arr;
 }

 console.log( bubbleSort([3,2,1,44,5,66,7]))
 console.log( bubbleSort([7,8,9,2]))