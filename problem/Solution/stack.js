export default class Stack {
    constructor() {
        this.items = []
    }
    // o(n)
    push(value) {
        this.items.push(value)
    }

    pop() {
        if (this.isEmpty) {
            return undefined;
        }
        return this.items.map()
    }
     
 }
