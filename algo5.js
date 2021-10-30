class Tree {
    constructor() {
        this.root = null;
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
    }
}

class DLLNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var tree = new Tree();
var node = new TreeNode(10);
tree.root = node;
var node1 = new TreeNode(12);
var node2 = new TreeNode(15);
var node3 = new TreeNode(25);
var node4 = new TreeNode(30);
var node5 = new TreeNode(36);
node1.left = node3;
node1.right = node4;
tree.root.left = node1;
tree.root.right = node2;
node2.left = node5;

function binaryTreeToDLL(tree) {
    if (!tree.root) return null;
    let dll = new DLL();
    let inorder = (node) => {
        if (node.left) inorder(node.left);
        if (dll.head === null) {
            let newNode = new DLLNode(node.value);
            dll.head = newNode;
        } else {
            let curr = dll.head;
            while (curr.next) {
                curr = curr.next;
            }
            let newNode = new DLLNode(node.value);
            newNode.prev = curr;
            curr.next = newNode;
        }
        if (node.right) inorder(node.right);
    }
    inorder(tree.root);
    return dll;
}

binaryTreeToDLL(tree);