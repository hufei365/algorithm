/**
 * https://leetcode.cn/problems/parsing-a-boolean-expression/
 * 给你一个以字符串形式表述的 布尔表达式（boolean） expression，返回该式的运算结果。
    有效的表达式需遵循以下约定：
    - "t"，运算结果为 True
    - "f"，运算结果为 False
    - "!(expr)"，运算过程为对内部表达式 expr 进行逻辑 非的运算（NOT）
    - "&(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 与的运算（AND）
    - "|(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 或的运算（OR）
 */

/**
* @param {string} expression
* @return {boolean}
*/
var parseBoolExpr = function (expression) {
    const stack = [], len = expression.length;
    let i = 0;
    while (i < len) {
        const char = expression[i]
        switch (char) {
            case 't':
            case 'f':
            case '!':
            case '&':
            case '|':
            case '(':
                stack.push(char); break;
            case ')':
                const expr = [];
                let lastChar = stack.pop()
                while(lastChar !== '('){
                    expr.push(lastChar)
                    lastChar = stack.pop()
                }
                const operator = stack.pop()
                const newChar = doEval(operator, expr);
                stack.push(newChar);
                break;
            case ',':
        }
        i++;
    }

    return stack[0] === 't'

    function doEval(operator, expr){
        let result = null
        switch(operator){
            case '&':
                result = expr.includes('f') ? 'f' : 't'; break;
            case '!':
                result = expr[0] === 'f' ? 't' : 'f'; break;
            case '|':
                result = expr.includes('t') ? 't' : 'f'; break;
        }
        return result;
    }
};

parseBoolExpr("&(|(f))")