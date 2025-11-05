class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkeList {
    constructor(value) {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }
    append(value) {
        const newNode = new Node(value);
        // if the linkedlist empty
        if (this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
    }
    prepend() { }
    indsert() { }
    remove() { }
    print() { }
}