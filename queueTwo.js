class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0
    }
    peek() {
        return this.first ? this.first.value : undefined
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmty) {
            this.first = newNode;
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
    dequeue() {
        if (this.isEmtpy()) {
            return undefined
        }
        const nodeToRemove = this.first
        if (this.first === this.first) {
            this.last = null
        }
        this.first = this.first.next
    }
    isEmtpy() {
        return this.length === 0
    }
    size() {
        return this.length
    }
    print() {
        const array = [];
        let currentNode = this.first;
        while (currentNode) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log("Front ==> " + array.join("==>"));
    }

}
