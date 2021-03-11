/**
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 * 整数除法仅保留整数部分。

 * 示例 1：
 * 输入：s = "3+2*2"
 * 输出：7
 
* 示例 2：
 * 输入：s = " 3/2 "
 * 输出：1
 
* 示例 3：
 * 输入：s = " 3+5 / 2 "
 * 输出：5

 * 提示：
 * 1 <= s.length <= 3 * 105
 * s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
 * s 表示一个 有效表达式
 * 表达式中的所有整数都是非负整数，且在范围 [0, 231 - 1] 内
 * 题目数据保证答案是一个 32-bit 整数

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/basic-calculator-ii
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    const stack = [];
    let prev, cur, next;


    return tokenier(s);
    
    function tokenier(s){
        let curStr='';
        for(let i = 0; i < s.length; i++){
            cur = s[i];
            if(cur === ' ') continue;
            next = getNext(i);
            // number
            if(/\d/.test(cur)){
                prev = getStackTop(stack);
                curStr+=cur;
                while( /\d/.test(s[++i])){
                    curStr+=s[i];
                }
                stack.push(+curStr), curStr = '';
                // if next char is '*' or '/', then go on tokenier
                next = s[i];
                while(next === ' '){
                    next = s[++i];
                }
                if(prev && !isMutilOrDivide(prev) && isMutilOrDivide(next)){
                    stack.push(next);
                    continue;
                }
                // else try to doCalc
                else {
                    doCalc()
                    cur = next; next = getNext(i);
                }
            }
            
            //(,+
            if(cur === '(' || isOper(cur)) stack.push(cur);
            // do pop stack
            if(cur === ')'){
                stack.push(cur);
                doCalc();
            }
        }
        while(stack.length > 2 ){
            doCalc()
        }
        // doCalc();
        return stack.join('');
    }

    function getNext(curPos){
        let j = curPos+1, next = s[j];
        while(next === ' '){
            next = s[++j]
        }
        return next;
    }
    
    function isOper(oper){
        return ['+', '-', '*', '/'].includes(oper);
    }
    
    function doCalc(){
        // console.log(stack, 'start', next)
        if(stack.length > 2){
            let right = stack.pop(), mid = stack.pop(), left = stack.pop();
            if( right === ')' && isNumber(mid) && left === '('){
                stack.push( mid );
                if(!isMutilOrDivide(next)){
                    doCalc();
                } 
            } else if( isNumber(right) && isOper(mid) && isNumber(left)){
                stack.push( calc(left, mid, right));
                if(!isMutilOrDivide(next)){
                    doCalc();
                }
            } else {
                stack.push(left);
                stack.push(mid);
                stack.push(right);
            }
        }
        // console.log(stack, 'end')

    }
    function calc(left, mid, right){
        let result = 0;
        switch(mid){
            case '+':
                result = Number(left)+Number(right);break;
            case '-':
                result = Number(left) - Number(right);break;
            case '*':
                result = left * right;break;
            case '/':
                result = parseInt(left/right);break;
        }
        return result;
    }
    function isNumber(n){
        return /^\-?\d+$/g.test(n);
    }
    function isMutilOrDivide(c){
        return ['*', '/'].includes(c);
    }
    function getStackTop(stack){
        return stack.length ? stack[stack.length-1] : undefined;
    }
    function isMutil(c){
        return c === '*'
    }
    function isMinus(c){
        return c === '-';
    }
    function isPlus(c){
        return c === '+'
    }
};


console.log(calculate("1*2-3/4+5*6-7*8+9/10")); // -24
console.log(calculate("1+2*5/3+6/4*2")); // 6
console.log(calculate("14/3*2")); // 8
console.log(calculate("3+2*2")); // 7
console.log(calculate(" 3/2 ")); // 1
console.log(calculate(" 3+5 / 2 ")); // 5
