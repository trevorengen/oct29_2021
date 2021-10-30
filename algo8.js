class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseEveryK(list, k) {
    let runner = list.head;
    let walker = runner;
    while (walker) {
        let fiveArr = [];
        for (var i = 0; i < k; i++) {
            if (!runner) break;
            fiveArr.push(runner.value);
            runner = runner.next;
        }
        for (var i = 0; i < k; i++) {
            if (!walker) break;
            walker.value = fiveArr.pop();
            walker = walker.next;
        }
    }
    list.printList();
}

class SLL {
    constructor() {
        this.head = null;
    }
    
    push(val) {
        let node = new ListNode(val);
        node.next = this.head;
        this.head = node;
    }

    printList() {
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

var sll = new SLL();
sll.head = new ListNode(10);
sll.push(9);
sll.push(8);
sll.push(7);
sll.push(6);
sll.push(5);
sll.push(4);
sll.push(3);
sll.push(2);
sll.push(1);
reverseEveryK(sll, 3);