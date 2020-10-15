/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this._stack = [];
    this.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this._stack.push(x);
    if( this.min!==null){
        this.min = Math.min( x, this.min);
    } else {
        this.min = x;
    }
    console.log(this)
    return null
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this._stack.pop();
    this.min = this._stack[0] || null;
    for( var i = 1; i < this._stack.length; i++){
        this.min = Math.min( this._stack[i], this.min)
    }
    console.log(this)
    return null
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    console.log(this)
    return this._stack[this._stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    console.log(this)
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 * 
 * 
 * ["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"]
[[],[2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]]
 */
var obj = new MinStack();

var opers =  ["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"];
var args = [[],[2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]];

for(var i = 1; i < opers.length; i++){
    console.log( obj[opers[i]].apply(obj, args[i]))
}