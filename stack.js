// Stack JavaScript er modde 2 type implement kora jai
// 1. Array 3 method in stack (push , pop, peek)
//push data add 
//pop data remove,
//peek data infront
// 2. Linkelist
// constructor হলো একটা special method যা class থেকে নতুন object (instance) বানানোর সময় স্বয়ংক্রিয়ভাবে কল হয়।

class Stack {
    constructor() {
        this.items = []
    }
    
// O(1)
    push(value) {
        this.items.push(value)
    }
    // O(1)
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }
    // O(1)
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1]
    }
    // O(1)
    isEmpty(){
        return this.items.length === 0
    }
    // O(n)
    print(){
        console.log(this.items.slice().reverse().join("👉"));
    }
}
const stack = new Stack();
stack.push(10)/
stack.push(20)
stack.push(30)
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());