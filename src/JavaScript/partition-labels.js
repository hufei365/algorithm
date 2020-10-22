/**
 * 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
 
 * 示例 1：
 * 
 * 输入：S = "ababcbacadefegdehijhklij"
 * 输出：[9,7,8]
 * 解释：
 * 划分结果为 "ababcbaca", "defegde", "hijhklij"。
 * 每个字母最多出现在一个片段中。
 * 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
 *  
 * 
 * 提示：
 * 
 * S的长度在[1, 500]之间。
 * S只包含小写字母 'a' 到 'z' 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/partition-labels
 */

 /**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    
    if( S.length === 0 ) return [];
    if( S.length === 1 ) return [1];
    let results = [];
    
    let len = S.length;
    let last = S[len-1];
    let start = S.indexOf( last );
    let end = len - 2;
    while( end > start ){
        start = Math.min( S.indexOf(S[end]), start );
        end--;
    }
    
    let next = S.slice(0, start);
    return partitionLabels(next).concat([ len-start ])
};

console.log( partitionLabels("ababcbacadefegdehijhklij"))