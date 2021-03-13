/**
 * 不使用任何内建的哈希表库设计一个哈希集合（HashSet）。
 * 实现 MyHashSet 类：

 * void add(key) 向哈希集合中插入值 key 。
 * bool contains(key) 返回哈希集合中是否存在这个值 key 。
 * void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
 
 * 示例：

 * 输入：
 * ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
 * [[], [1], [2], [1], [3], [2], [2], [2], [2]]
 * 输出：
 * [null, null, null, true, false, null, true, null, false]

 * 解释：
 * MyHashSet myHashSet = new MyHashSet();
 * myHashSet.add(1);      // set = [1]
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(1); // 返回 True
 * myHashSet.contains(3); // 返回 False ，（未找到）
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(2); // 返回 True
 * myHashSet.remove(2);   // set = [1]
 * myHashSet.contains(2); // 返回 False ，（已移除）
 
 * 提示：
 *  0 <= key <= 106
 *  最多调用 104 次 add、remove 和 contains 。
 
 * 进阶：你可以不使用内建的哈希集合库解决此问题吗？

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/design-hashset
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.values = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if(!this.contains(key)){
        this.values.push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    const index = this.values.indexOf(key);
    if(index > -1 ) {
        this.values.splice(index, 1);
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.values.includes(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */


/**
 * ["MyHashSet","add","contains","add","contains","remove","add","contains","add","add","add","add","add","add","contains","add","add","add","contains","remove","contains","contains","add","remove","add","remove","add","remove","add","contains","add","add","contains","add","add","add","add","remove","contains","add","contains","add","add","add","remove","remove","add","contains","add","add","contains","remove","add","contains","add","remove","remove","add","contains","add","contains","contains","add","add","remove","remove","add","remove","add","add","add","add","add","add","remove","remove","add","remove","add","add","add","add","contains","add","remove","remove","remove","remove","add","add","add","add","contains","add","add","add","add","add","add","add","add"]
 * [[],[58],[0],[14],[58],[91],[6],[58],[66],[51],[16],[40],[52],[48],[40],[42],[85],[36],[16],[0],[43],[6],[3],[25],[99],[66],[60],[58],[97],[3],[35],[65],[40],[41],[10],[37],[65],[37],[40],[28],[60],[30],[63],[76],[90],[3],[43],[81],[61],[39],[75],[10],[55],[92],[71],[2],[20],[7],[55],[88],[39],[97],[44],[1],[51],[89],[37],[19],[3],[13],[11],[68],[18],[17],[41],[87],[48],[43],[68],[80],[35],[2],[17],[71],[90],[83],[42],[88],[16],[37],[33],[66],[59],[6],[79],[77],[14],[69],[36],[21],[40]]
 */


 // [null,null,false,null,true,null,null,true,null,null,null,null,null,null,true,null,null,null,true,null,false,true,null,null,null,null,null,null,null,false,null,null,true,null,null,null,null,null,true,null,true,null,null,null,null,null,null,false,null,null,false,null,null,false,null,null,null,null,false,null,true,true,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,false,null,null,null,null,null,null,null,null,null,false,null,null,null,null,null,null,null,null]
 // [null,null,false,null,true,null,null,true,null,null,null,null,null,null,true,null,null,null,true,null,false,true,null,null,null,null,null,null,null,true,null,null,true,null,null,null,null,null,true,null,true,null,null,null,null,null,null,false,null,null,false,null,null,false,null,null,null,null,true,null,true,true,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,true,null,null,null,null,null,null,null,null,null,false,null,null,null,null,null,null,null,null]