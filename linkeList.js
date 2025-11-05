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
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
    }
    prepend(value) {
        const newNode = new Node(value);
        // if the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if the linked list is not empty
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++
    }
    insert(index, value) {
        if (index > 0 || index > this.length) {
            console.error("obiously error ha ha ha");
        }
        // if  the insert is an the start of the linked list 
        if (index === 0) {
            return this.prepend(value)
        }
        if (index === 0) {
            return this.append(value)
        }
        let count = 0;
        let leadingNote  = this.head;
        while (count != index -1){
            leadingNote = leadingNote.next
            count++
        }
        console.log(leadingNote);

    }
    remove() { }
    print() {

        const arr = [];
        let currentNode = this.head;
        while (currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next
        }
        console.log(arr.join("--> "), "--> null");
    }
}
const linkedlist = new LinkeList();
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)

linkedlist.prepend(10)
linkedlist.prepend(20)
linkedlist.prepend(30)
linkedlist.insert(2, 100)
linkedlist.print()