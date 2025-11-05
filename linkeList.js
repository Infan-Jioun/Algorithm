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
        return this;
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
        return this;
    }
    insert(index, value) {
        if (index > 0 || index > this.length) {
            console.error("obiously error ha ha ha");
        }
        // if  the insert is an the start of the linked list 
        if (index === 0) {
            return this.prepend(value)
        }
        if (index === this.length) {
            return this.append(value)
        }
        // let count = 0;
        // let leadingNote = this.head;
        // while (count != index - 1) {
        //     leadingNote = leadingNote.next
        //     count++
        // }
        const leadingNote = this._traverseToIndex(index - 1)
        const holdingNode = leadingNote.next;
        const newNode = new Node(value);
        leadingNote.next = newNode
        newNode.next = holdingNode
        this.length++


    }
    remove(index) {
        if (index === 0) {
            const removeItem = this.head.value;
            this.head = this.head.next;
            if (this.length === 1) {
                this.tail = null;
            }
            this.length--
            return removeItem;
        }
        const leadingNote = this._traverseToIndex(index - 1);
        const nodeToRemove = leadingNote.next;
        leadingNote.next = nodeToRemove.next;
        if (leadingNote.next === null) {
            this.tail = leadingNote;
        }
        // console.log(leadingNote); 
        return nodeToRemove.value;let count = 0;
        let currentNode = this.head;
        while (count != index) {
            currentNode = currentNode.next;
            count++
        }
    }
    
    
    // private helper funtion
    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head;
        while (count != index) {
            currentNode = currentNode.next;
            count++
        }
        return currentNode;
    }
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
// Method -1 
// linkedlist.append(0)
// linkedlist.append(1)
// linkedlist.append(2)
// Method -2
linkedlist.append(0).append(1).append(2).append(3)
// linkedlist.prepend(10)
// linkedlist.prepend(20)
// linkedlist.prepend(30)
// linkedlist.insert(2, 200)
linkedlist.remove(2)

linkedlist.print()