class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function lcaFinder(root, n1, n2) {
    let n1Path = [];
    let n2Path = [];
    let pathFinder = (node, val, path) => {
        if (!node) return false;
        path.push(node.value);
        if (node.value === val) return true;
        if (node.left && pathFinder(node.left, val, path)) return true;
        if (node.right && pathFinder(node.right, val, path)) return true;
        path.pop();
        return false;
    }
    pathFinder(root, n1, n1Path);
    pathFinder(root, n2, n2Path);
    for (var i = 0; i < n1Path.length && i < n2Path.length; i++) {
        if (n1Path[i] !== n2Path[i]) {
            break;
        }
    }
    return n1Path[i-1];
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(lcaFinder(root, 2, 4))