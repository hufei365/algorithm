function binarySearch(arr, target){
    let low = 0, high = arr.length-1;

    
    while( low <= high ){
        let mid = Math.floor( low + (high-low)/2 );
        let result = null;
        if( target < arr[mid]){
            high = mid;
        } else if( target > arr[mid]){
            low = mid;
        } else if( target === arr[mid]) {
            return mid;
        }
        console.log( `low: ${low}, hight: ${high}`)
    }
    return -1;
}

const arr = [1,2,4,7,9, 10, 15, 45 ];

// verify the result
arr.forEach( v=> {
    console.log( binarySearch( arr, v ))
})

// case: can not find 
console.log( binarySearch( arr, 44))