function add(num1, num2){

    let arr1 = num1.split(''), 
        arr2 = num2.split('');

    let l1 = arr1.length, l2 = arr2.length;
    let sum = [], mod = 0;
    
    while( l1 > 0 || l2 > 0 ){
        l1 = l1 < 0 ? -1 : l1-1;
        l2 = l2 < 0 ? -1 : l2-1;
        let result = (+(arr1[l1] || 0)) +  (+(arr2[l2]|| 0)) + mod;
        if( result > 9 ){
            sum.push( result%10);   
            mod = 1;
        } else {
            mod = 0;
            sum.push(result)
        }
    }
    if(mod !== 0) sum.push(mod)
    return sum.reverse().join('')
}

function partialAdd(num1, num2){
    let step = 15, mod = 0; sum = '';

    while( num1.length || num2.length ){
        let a = num1.slice( -step ),
            b = num2.slice( -step );
        
        result = ((+a) + (+b) + (+mod)).toString();
        if( result.length > 15 ){
            mod = result.slice(0, 1);
            sum = result.slice(1,16) + sum;
        } else {
            mod = 0;
            if( result.length < Math.max( a.length, b.length ) ){
                result = result.padStart(Math.max( a.length, b.length ), '0')
            }
            sum = result + sum;
        }
        num1 = num1.length > 15 ? num1.slice(0,  num1.length-15) : "";
        num2 = num2.length > 15 ? num2.slice(0,  num2.length-15) : "";
    }
    if( mod !== 0 ){
        sum = mod + sum;
    }
    return sum;
}

// console.log(add('123', '499'));
console.log(add('162984787668338833', '31422213867905'));
console.log(partialAdd('162984787668338833', '31422213867905'));
console.log(add('7977911446243', '8665070138384383674'));
console.log(partialAdd('7977911446243', '8665070138384383674'));

console.log(partialAdd('11111', '99999'));
console.log(partialAdd('123', '499'));
