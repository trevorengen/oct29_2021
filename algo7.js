class Stack {
    constructor(max = 100) {
        this.stack = [];
        this.minStack = [];
        this.max = max;
    }

    push(val) {
        if (this.stack.isFull()) return false;
        this.stack.push(val);
        if (this.minStack[this.minStack.length - 1] >= val) {
            this.minStack.push(val);
        }
        return true;
    }

    pop() {
        let val = this.stack.pop();
        if (this.minStack[this.minStack.length - 1] === val) this.minStack.pop();
        return val;
    }

    isEmpty() {
        if (this.stack.length === 0) return true;
    }

    isFull() {
        if (this.stack.length - 1 === this.max) return true;
        return false;
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

var stack = new Stack();
