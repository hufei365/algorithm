/**
 * 你一个 无重叠的 ，按照区间起始端点排序的区间列表。

 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

 * 示例 1：
 * 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出：[[1,5],[6,9]]

 * 示例 2：
 * 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出：[[1,2],[3,10],[12,16]]
 * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

 * 示例 3：
 * 输入：intervals = [], newInterval = [5,7]
 * 输出：[[5,7]]

 * 示例 4：
 * 输入：intervals = [[1,5]], newInterval = [2,3]
 * 输出：[[1,5]]

 * 示例 5：
 * 输入：intervals = [[1,5]], newInterval = [2,7]
 * 输出：[[1,7]]
 
 * 提示：
 *   0 <= intervals.length <= 104
 *   intervals[i].length == 2
 *   0 <= intervals[i][0] <= intervals[i][1] <= 105
 *   intervals 根据 intervals[i][0] 按 升序 排列
 *   newInterval.length == 2
 *   0 <= newInterval[0] <= newInterval[1] <= 105

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/insert-interval
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length === 0) return [newInterval];
    const [start, end] = newInterval;
    let top = 0, tail = intervals.length -1;
    let newIntervals = [];

    // case 1
    if(end < intervals[top][0]){
        intervals.unshift(newInterval);
        return intervals;
    }
    
    // case 2
    if(start > intervals[tail][1]){
        intervals.push(newInterval);
        return intervals;
    }

    // case 3
    if( start <= intervals[top][0] &&  end >= intervals[tail][1]){
        return [newInterval];
    }

    // reset the first start and last end
    if( start < intervals[top][0] ) intervals[top][0] = start;
    if( end > intervals[tail][1] ) intervals[tail][1] = end;

    while( top <= tail ){
        const cur = intervals[top];
        const [curStart, curEnd] = cur;
        // cur interval is on the left of newInterval
        if(start > curEnd ){
            newIntervals.push(cur);
            top++; 
            let next = intervals[top];
            //  newInterval has no override with the next interval
            if(end < next[0]){
                newIntervals.push( newInterval );
                while(top <= tail ){
                    newIntervals.push(intervals[top++])
                }
            }
            continue;
        } else if(start === curEnd){
            if(top === tail){
                newIntervals.push([curStart, end]);
                break;
            }
            let next;
            while((next = intervals[++top]) && top <= tail){
                let [nextStart, nextEnd] = next;
                if(end < nextStart){
                    newIntervals.push([curStart, end]);break;
                } else if( end <= nextEnd ){
                    newIntervals.push([curStart, nextEnd]);top++;break;
                } else {
                    if(top === tail){
                        newIntervals.push([curStart, end]);
                    }
                }
            }
            while(top <= tail ){
                newIntervals.push(intervals[top++])
            }
        } else if( start >= curStart && end <= curEnd){
            newIntervals = intervals;
            break;
        } else if( start < curStart && end < curEnd && end > curStart ){
            newIntervals.push( [ start, curEnd ]);
            while(++top <= tail ){
                newIntervals.push(intervals[top])
            }
        }else if( end > curEnd){
            if(top === tail){
                newIntervals.push([
                    curStart > start ? start : curStart, end > curEnd ? end : curEnd
                ]);
                break;
            }
            let next;
            while((next = intervals[++top]) && top <= tail){
                let [nextStart, nextEnd] = next;
                if(end < nextStart){
                    newIntervals.push([curStart > start ? start : curStart, end]);break;
                } else if( end <= nextEnd){
                    newIntervals.push([curStart > start ? start : curStart, nextEnd]);top++;break;
                } else {
                    if(top === tail){
                        newIntervals.push([curStart > start ? start : curStart, end]);
                    }
                }
            }
            while(top <= tail ){
                newIntervals.push(intervals[top++])
            }
        } else {
            if( top === tail ){
                newIntervals.push([start, curEnd > end ? curEnd : end]);
            }
            top++;
        }
    }
    return newIntervals;
};


console.log(insert([[3,6],[9,9],[11,13],[14,14],[16,19],[20,22],[23,25],[30,34],[41,43],[45,49]],[29,32])); // [[3,6],[9,9],[11,13],[14,14],[16,19],[20,22],[23,25],[29,34],[41,43],[45,49]]
console.log(insert([[1,4],[9,12],[19,22]],[7,13])); // [[1,4],[7,13],[19,22]]
console.log(insert([[3,5],[12,15]],[6,6])); // [[3,5],[6,6],[12,15]]
console.log(insert([[1,4],[7,12]],[4,10])); //[[1,12]]
console.log(insert([[0,0],[1,3],[5,11]],[0,3])); //[[0,3],[5,11]]
console.log(insert([[0,0],[1,3],[5,11]],[0,3])); //[[0,3],[5,11]]
console.log(insert([[0,5],[9,12]],[7,16])); //[[0,5], [7,16]]
console.log(insert([[1,5],[9,12]],[0,4])); //[[0,5], [9,12]]
console.log(insert([[0,5],[8,9]],[3,4])); //[[0,5], [8,9]]
console.log(insert([[1,5],[6,8]],[0,9])); //[[0,9]]
console.log(insert([[1,5],[6,8]],[3,7])); //[[1,8]]
console.log(insert([[1,5]],[0,3])); //[[0,5]]
console.log(insert([[1,5]],[5,7])); //[[1,7]]
console.log(insert([[6,9]], [1,2])); //[[1,2], [6,9]]
console.log(insert([[1,5]], [6,8])); //[[1,5], [6,8]]
console.log(insert([[1,5]], [2,3])); //[[1,5]]
console.log(insert([[1,3],[6,9]], [2,5])); //[[1,5],[6,9]]
console.log(insert([], [2,5])); //[[2,5]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); // [[1,2],[3,10],[12,16]]