/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var recoverTree = function(root) {
    const arr = traverse(root)
    const len = arr.length

    let left = -1, right = -1;
   
    let i = 0;
    while(i < len){
        if(arr[i] === null){
            i++;
            continue;
        }
        let j = i+1
        let next = arr[j]
        while(next === null && j < arr.length){
            j++;
            next = arr[j]
        }
        if(arr[i] > next){
            left = i;
            break;
        } else {
            i = j
        }
    
    }
    i = arr.length - 1
    while(i > 0){
        if(arr[i] === null){
            i--;
            continue;
        }
        let j = i-1
        let next = arr[j]
        while(next === null && j >= 0){
            j--;
            next = arr[j]
        }
        if(arr[i] < next){
            right = i;
            break;
        } else {
            i = j
        }
    }
    if(left < right){
        const [left1, right1] = traverseWithHandler(root, (node) => {
            return node.val === arr[left] || node.val === arr[right]
        })
        if(left1.val === arr[right]){
            left1.val = arr[left]
            right1.val = arr[right]
        } else {
            left1.val = arr[right]
            right1.val = arr[left]
        }
    }
};

/** 中序遍历 */
function traverse(root){
    if(root){
        return traverse(root.left).concat([root.val], traverse(root.right))
    } else {
        return [null]
    }
}

function traverseWithHandler(root, handler){
    let result = []
    if(root){
        if(handler(root)){
            result.push(root)
        }
        if(root.left){
            result = result.concat(traverseWithHandler(root.left,handler))
        }
        if(root.right){
            result = result.concat(traverseWithHandler(root.right, handler))
        }
        return result
    } else {
        return result
    }
}
