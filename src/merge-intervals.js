/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 * 示例 1：

 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 示例 2：

 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 
 * 提示：
 *   1 <= intervals.length <= 104
 *   intervals[i].length == 2
 *   0 <= starti <= endi <= 104

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/merge-intervals
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length === 1) return intervals;
    const results = [];
    let last = null, needDeep = 0;

    intervals.reduce((prev, next)=>{
        const [x1, x2] = prev, [y1, y2] = next;
        if(x2 < y1){
            results.push(prev);
            return last=next;
        } else if(y2 < x1){
            needDeep = 1;
            results.push(next);
            return last=prev;
        }else {
            needDeep = 1;
            return last=[x1 > y1 ? y1:x1, y2>x2 ? y2 : x2]
        }
    })
    results.push(last);
    return needDeep ? merge(results) : results;
};


console.log( merge([[1,3],[2,6],[8,10],[15,18]]))
console.log( merge([[1,4],[4,5]]))
console.log( merge([[1,4],[0,2],[3,5]]))
console.log( merge([[1,4]]))
console.log( merge([[1,4], [0, 0]]))
console.log( merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))
console.log( merge([[1,3],[2,6],[8,10],[15,18]]))

//0,1,2,3,4,5