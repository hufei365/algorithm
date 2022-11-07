/**
 * https://leetcode.cn/problems/longest-valid-parentheses/
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const stack = [];
    let i = 0;
    let count = 0, maxCount = 0;
    while(i < s.length){
        const char = s[i++];
        switch(char){
            case '(':
                stack.push(char)
                break;
            case ')':
                console.log('stack is ', stack)
                const len = stack.length;
                if(len === 1){
                    const last = stack.pop();
                    if(last === '('){
                        stack.push(2)
                        maxCount = Math.max(2, maxCount)
                    } else if( last === ')'){
                        stack.push(last)
                        stack.push(char)
                    } else {
                        maxCount = last
                        stack.push(last)
                        stack.push(char)
                    }
                } else if(len === 0) {
                    stack.push(char)
                } else {
                    const last = stack.pop();
                    const lastLast = stack.pop();
                    if(last === '('){
                        if(lastLast === ')' || lastLast === '('){
                            stack.push(lastLast)
                            stack.push(2)
                            maxCount = Math.max(2, maxCount)
                        } else {
                            stack.push(lastLast+2)
                            maxCount = Math.max(lastLast+2, maxCount)

                        }
                    } else if(last === ')'){
                        stack.push(lastLast)
                        stack.push(last)
                    } else {
                        // last is a number
                        if(lastLast === '('){
                            const lastlastlast = stack.pop();
                            if(lastlastlast && !Number.isNaN(Number(lastlastlast))){
                                stack.push(lastlastlast + last + 2)
                                maxCount = Math.max(lastlastlast + last+2, maxCount)
                            } else {
                                lastlastlast && stack.push(lastlastlast)
                                stack.push(last + 2)
                                maxCount = Math.max(last+2, maxCount)
                            }
                        } else if(lastLast === ')'){
                            stack.push(lastLast)
                            stack.push(last)
                            stack.push(char)
                            maxCount = Math.max(last, maxCount)
                        } else {
                            stack.push(last)
                            console.log(`i: ${i} last: ${last}, lastLast: ${lastLast}`, stack)
                            console.log('It should not be print')
                        }
                    }
                }
        }
    }
    return maxCount;
};


console.log(longestValidParentheses("(()))())(")) // 4
console.log(longestValidParentheses("()")) // 2
console.log(longestValidParentheses("()(())")) // 6
console.log(longestValidParentheses("(()")) // 2
console.log(longestValidParentheses("((())")) // 4
console.log(longestValidParentheses("()(()")) // 2