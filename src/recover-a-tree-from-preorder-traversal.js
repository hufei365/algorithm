/**
 * https://leetcode.cn/problems/recover-a-tree-from-preorder-traversal/
 */


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
    let i = 0; 
    let rootVal = ''
    const len = traversal.length
    while( i < len && traversal[i] !== '-'){
        rootVal += traversal[i];
        i++
    }
    const root = new TreeNode(Number(rootVal))
    if (i === len) return root;

    const treeNodes = [];
    treeNodes.push(root)
    let lastLevel = null

    while (i < len) {
        let level = 0
        while(traversal[i] === '-' && i < len){
            level++, i++
        }
        let nodeVal = ''
        while(traversal[i] !== '-' && i < len){
            nodeVal += traversal[i];
            i++
        }
        const parentNode = treeNodes[level-1]
        const currentNode = new TreeNode(Number(nodeVal))
        if(parentNode.left === null){
            parentNode.left = currentNode
        } else if (parentNode.right === null){
            parentNode.right = currentNode
        }
        if(lastLevel !== null && level < lastLevel){
            treeNodes.splice(level)
        } else if(lastLevel && level === lastLevel){
            treeNodes.splice(level, 1)
        } else {
            lastLevel = level
        }
        treeNodes.push(currentNode)
    }
    
    console.log(JSON.stringify(root, null, 4))
    return root
};


recoverFromPreorder("3-10-4--3---3")
// recoverFromPreorder("1-401--349--90---88")
// recoverFromPreorder("10-7--8")
// recoverFromPreorder("1-2--3--4-5--6--7")
// recoverFromPreorder("1-2--3---4-5--6---7")