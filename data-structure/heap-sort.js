/**
 * 堆排序
 */

function heapSort(arr){

    function init(end){
        let len = end || arr.length;
        let mid = parseInt(len/2 - 1);
        let flag = false;

        while( mid > -1){
            if( arr[mid] < arr[mid*2+1] ){
                [arr[mid], arr[mid*2+1]] = [arr[mid*2+1], arr[mid]];
                flag = true;
            }
            if( arr[mid] < arr[mid*2+2]){
                [arr[mid], arr[mid*2+2]] = [arr[mid*2+2], arr[mid]]
                flag = true;
            }
            mid--;
        }
        if( flag ) init( end );
    }
    function findTop(end){
        let i = (end || arr.length ) - 1;
        if( i > 0){
            arr[i--] = arr[0];
            init( i+2 )
            findTop( i+2 )
        }
    }

    init();
    findTop( );
    console.log( arr );

}
console.log( heapSort([4,6,8,5,9]))