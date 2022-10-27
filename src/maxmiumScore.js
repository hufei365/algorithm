/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function(cards, cnt) {
    cards.sort((a,b)=>b-a)
    

    let result = cards.slice(0, cnt).reduce((a, b)=>a+b)

    if(result%2 === 0){
        return result
    }
    
    let leftJishuIndex = null, leftOushuIndex = null, rightOushuIndex = null, rightJishuIndex = null;
    for(let i = cnt-1; i >=0; i--){
        if(cards[i] % 2 === 1 && leftJishuIndex === null){
            leftJishuIndex = i;
        }else if(cards[i] % 2 === 0 && leftOushuIndex === null){
            leftOushuIndex = i;
        }
        if(leftJishuIndex !== null && leftOushuIndex !== null){
            break;
        }
    }
    for(let i = cnt; i < cards.length; i++){
        if(cards[i] % 2 === 1 && rightJishuIndex === null){
            rightJishuIndex = i;
        }else if(cards[i] % 2 === 0 && rightOushuIndex === null){
            rightOushuIndex = i;
        }
        if(rightJishuIndex !== null && rightOushuIndex !== null){
            break;
        }
    }
    let result1 = null , result2 = null;
    if(leftOushuIndex !== null && rightJishuIndex !== null){
        result1 = result - cards[leftOushuIndex] + cards[rightJishuIndex]
    }
    if(leftJishuIndex !== null && rightOushuIndex !== null){
        result2 = result - cards[leftJishuIndex] + cards[rightOushuIndex]
    }
    if(result1 === null ||  result2 === null){
        return result1 || result2
    }
    return Math.max(result1, result2)

};

maxmiumScore([1,2,8,9], 3)