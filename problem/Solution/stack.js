export default class Stack {
    constructor() {
        this.items = []
    }
    // o(n)
    push(value) {
        this.items.push(value)
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.map()
    }

    // 0(1)
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.map[this.items.length - 1]
    }
    // o(1)
    isEmpty() {
        return this.items.length === 0
    }
    // 0(n)
    print() {
        console.log(this.items.slice().reverse().join("->"));
    }
}
