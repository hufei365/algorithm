/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var result = [];

    for(var i = 0; i<numbers.length; i++){
            var rest = numbers.slice(i+1).indexOf(target - numbers[i]);
            if( rest !== -1 ){
                result = [i+1, rest+i+1+1];
                break;
            }
    }
    return result;
};

console.log(twoSum([2,7,11,15], 9))