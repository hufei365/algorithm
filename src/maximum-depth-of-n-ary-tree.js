/**
 * 给定一个 N 叉树，找到其最大深度。
 *
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 * 
 * N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */

const memo = new Map();
var maxDepth = function (root) {
    if (memo.get(root) !== undefined) return memo.get(root);
    if (root === null) {
        memo.set(root, 0);
    } else {
        if (root.children && root.children.length > 0) {

            const children = root.children.map(child => {
                return maxDepth(child);
            })
            memo.set(root, Math.max.apply(null, children) + 1);

        } else {
            memo.set(root, 1);
        }
    }
    return memo.get(root);

};